import React, { useState } from 'react';
import { Survey, SurveySingleItem } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveyPageView from './SurveyPageView/SurveyPageView';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router';
import SurveyEndView from '../SurveyEndView/SurveyEndView';

interface SinglePageSurveyViewProps {
  surveyDefinition: Survey;
  // context? - with previous answers
  // submit survey
  // init with temporary loaded results
  // save temporary result
}

const SinglePageSurveyView: React.FC<SinglePageSurveyViewProps> = (props) => {
  const [surveyEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.surveyDefinition));
  const surveyPages = surveyEngine.getSurveyPages();

  const [responseCount, setResponseCount] = useState(0);

  let { path } = useRouteMatch();

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
      <Route path={`${path}/pages/:index`} render={props => {
        let index = parseInt(props.match.params.index);

        // If invalid index, redirect to beginning of survey.
        if (index < 0 || index > surveyPages.length - 1) return <Redirect to={`${path}/0`} />

        let firstPage = index === 0;
        let lastPage = index >= surveyPages.length - 1;

        let primaryActionLabel = (lastPage) ? "Submit" : "Next";
        let primaryAction = (lastPage)
          ? () => {
            onSubmit();
            props.history.push(`${path}/completed`);
          }
          : () => props.history.push(`${path}/pages/${index + 1}`);

        let secondaryActionLabel = (firstPage) ? "" : "Back";
        let secondaryAction = (firstPage) ? () => null : () => props.history.goBack();

        return surveyPage(surveyPages[index], primaryActionLabel, primaryAction, secondaryActionLabel, secondaryAction);
      }} />
      <Route path={`${path}/completed`} component={SurveyEndView} />
      <Redirect to={`${path}/pages/0`} />
    </Switch>
  );
};

export default SinglePageSurveyView;
