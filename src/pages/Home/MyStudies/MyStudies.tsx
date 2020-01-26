import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import { Container } from '@material-ui/core';

import SinglePageSurveyView from '../../../components/survey/SinglePageSurveyView/SinglePageSurveyView';
import { QG0 } from '../../../test-surveys/test-survey-1';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const survey = renderSurvey({ surveyDef: testSurvey});
    dispatch(setPageTitle('My Studies'));
  });

  return (
    <Container maxWidth="lg">
      <SinglePageSurveyView
        surveyDefinition={QG0}
      />
    </Container>
  )
}

export default MyStudies;
