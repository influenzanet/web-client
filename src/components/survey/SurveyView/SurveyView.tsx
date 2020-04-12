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
  backBtnText?: string;
  nextBtnText?: string;
  submitBtnText?: string;
}

const SurveyView: React.FC<SurveyViewProps> = (props) => {
  const [surveyEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.survey, props.context, props.prefills));
  const surveyPages = surveyEngine.getSurveyPages();

  const [responseCount, setResponseCount] = useState(0);

  let { path: surveyPath } = useRouteMatch();
  let pagesPath = `${surveyPath}/pages`

  const [selectedLanguage, setSelectedLanguage] = useState('en');

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
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      responseCount={responseCount}
      setResponseCount={setResponseCount}
    />
  }

  return (
    <Switch>
      <Route path={`${pagesPath}/:index`} render={routeProps => {
        let index = parseInt(routeProps.match.params.index);

        // If invalid index, redirect to beginning of survey.
        if (index < 0 || index > surveyPages.length - 1) return <Redirect to={`${pagesPath}/0`} />

        let firstPage = index === 0;
        let lastPage = index >= surveyPages.length - 1;

        let primaryActionLabel = (lastPage) ?
          (props.submitBtnText ? props.submitBtnText : "Submit") :
          (props.nextBtnText ? props.nextBtnText : "Next");
        let primaryAction = (lastPage)
          ? () => {
            onSubmit();
            routeProps.history.push(`${surveyPath}/completed`);
          }
          : () => routeProps.history.push(`${pagesPath}/${index + 1}`);

        let secondaryActionLabel = (firstPage) ? "" : (props.backBtnText ? props.backBtnText : "Back");
        let secondaryAction = (firstPage) ? () => null : () => routeProps.history.goBack();

        return surveyPage(surveyPages[index], primaryActionLabel, primaryAction, secondaryActionLabel, secondaryAction);
      }} />
      <Route path={`${surveyPath}/completed`} component={SurveyEndView} />
      <Redirect to={`${pagesPath}/0`} />
    </Switch>
  );
};

export default SurveyView;
