import React, { useState } from 'react';
import { Survey, SurveySingleItem, SurveySingleItemResponse, SurveyContext } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveyPageView from './SurveyPageView/SurveyPageView';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router';
import SurveyEndView from '../SurveyEndView/SurveyEndView';

interface SurveyViewProps {
  survey: Survey;
  prefills?: SurveySingleItemResponse[];
  context?: SurveyContext;
  // context? - with previous answers
  // submit survey
  // init with temporary loaded results
  // save temporary result
  languageCode: string;
  backBtnText?: string;
  nextBtnText?: string;
  submitBtnText?: string;
}

const SurveyView: React.FC<SurveyViewProps> = (props) => {
  const [surveyEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.survey, props.context, props.prefills));
  const surveyPages = surveyEngine.getSurveyPages();

  const [responseCount, setResponseCount] = useState(0);

  let { path } = useRouteMatch();

  const onSubmit = () => {
    const resp = surveyEngine.getResponses();
    console.log(resp);
    console.log(JSON.stringify(resp));
  }

  const surveyPage = (surveyPageItems: SurveySingleItem[], primaryActionLabel: string, primaryAction: () => void, secondaryActionLabel: string, secondaryAction: () => void) => {
    return <SurveyPageView
      surveyEngine={surveyEngine}
      surveyItems={surveyPageItems}
      primaryActionLabel={primaryActionLabel}
      primaryAction={primaryAction}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={secondaryAction}
      selectedLanguage={props.languageCode}
      responseCount={responseCount}
      setResponseCount={setResponseCount}
    />
  }

  return (
    <Switch>
      <Route path={`${path}/pages/:index`} render={rProps => {
        let index = parseInt(rProps.match.params.index);

        // If invalid index, redirect to beginning of survey.
        if (index < 0 || index > surveyPages.length - 1) return <Redirect to={`${path}/0`} />

        let firstPage = index === 0;
        let lastPage = index >= surveyPages.length - 1;

        let primaryActionLabel = (lastPage) ?
          (props.submitBtnText ? props.submitBtnText : "Submit") :
          (props.nextBtnText ? props.nextBtnText : "Next");
        let primaryAction = (lastPage)
          ? () => {
            onSubmit();
            rProps.history.push(`${path}/completed`);
          }
          : () => rProps.history.push(`${path}/pages/${index + 1}`);

        let secondaryActionLabel = (firstPage) ? "" : (props.backBtnText ? props.backBtnText : "Back");
        let secondaryAction = (firstPage) ? () => null : () => rProps.history.goBack();

        return surveyPage(surveyPages[index], primaryActionLabel, primaryAction, secondaryActionLabel, secondaryAction);
      }} />
      <Route path={`${path}/completed`} component={SurveyEndView} />
      <Redirect to={`${path}/pages/0`} />
    </Switch>
  );
};

export default SurveyView;
