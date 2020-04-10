import React, { useState } from 'react';
import { Survey } from 'survey-engine/lib/data_types';
import { SurveyEngineCore } from 'survey-engine/lib/engine';
import SurveyPageView from './SurveyPageView/SurveyPageView';

interface SinglePageSurveyViewProps {
  surveyDefinition: Survey;
  // context? - with previous answers
  // submit survey
  // init with temporary loaded results
  // save temporary result
}

const SinglePageSurveyView: React.FC<SinglePageSurveyViewProps> = (props) => {
  const [surveyEngine] = useState<SurveyEngineCore>(new SurveyEngineCore(props.surveyDefinition));
  const surveyItems = surveyEngine.getSurveyPages()[0];

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const onSubmit = () => {
    const resp = surveyEngine.getResponses();
    console.log(resp);
    console.log(JSON.stringify(resp));
  }

  const onBack = () => {

  }

  return (
    <SurveyPageView
      surveyEngine={surveyEngine}
      surveyItems={surveyItems}
      primaryActionLabel="Next"
      primaryAction={onSubmit}
      secondaryActionLabel="Back"
      secondaryAction={onBack}
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
    />
  );
};

export default SinglePageSurveyView;
