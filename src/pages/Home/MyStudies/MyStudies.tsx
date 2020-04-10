import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import { Container } from '@material-ui/core';

import SinglePageSurveyView from '../../../components/survey/SinglePageSurveyView/SinglePageSurveyView';
import { testSurvey } from '../../../test-surveys/test-survey-1';
import { survey } from '../../../test-surveys/qcov';
import SurveyEndView from '../../../components/survey/SurveyEndView/SurveyEndView';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const survey = renderSurvey({ surveyDef: testSurvey});
    dispatch(setPageTitle('My Studies'));
  });

  return (
    <Container maxWidth="lg">
      <SinglePageSurveyView
        surveyDefinition={testSurvey}
      />
    </Container>
  )
}

export default MyStudies;
