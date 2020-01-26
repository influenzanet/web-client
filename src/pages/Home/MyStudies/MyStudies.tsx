import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import SingleChoice from '../../../components/survey/question-types/basic/SingleChoice/SingleChoice';
import { SurveySingleItem, ResponseItem } from 'survey-engine/lib/data_types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import MultipleChoice from '../../../components/survey/question-types/basic/MultipleChoice/MultipleChoice';
import SinglePageSurveyView from '../../../components/survey/SinglePageSurveyView/SinglePageSurveyView';
import { QG0 } from '../../../test-surveys/test-survey-1';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const survey = renderSurvey({ surveyDef: testSurvey});
    dispatch(setPageTitle('My Studies'));
  });


  const testQuestion: SurveySingleItem = {
    key: 'Q-TEST',
    type: 'basic.input.single-choice',
    version: 1,
    versionTags: [],
    validations: [],
    components: [
      {
        key: 'TITLE', role: 'title', content: [
          { code: 'en', parts: [{ str: 'Test question ' }, { str: '1' }] },
          { code: 'de', parts: [{ str: 'Testfrage ' }, { str: '1' }] }
        ]
      }, // displayCondition: {}
      {
        key: 'RG1', role: 'responseGroup', items: [
          {
            key: 'RG1.R1', role: 'option', content: [
              { code: 'en', parts: [{ str: 'Answer ' }, { str: '1' }] },
              { code: 'de', parts: [{ str: 'Antwort ' }, { str: '1' }] }
            ]
          },
          {
            key: 'RG1.R2', role: 'option', content: [
              { code: 'en', parts: [{ str: 'Answer ' }, { str: '2' }] },
              { code: 'de', parts: [{ str: 'Antwort ' }, { str: '2' }] }
            ]
          },
        ]
      }
    ]
  }

  const currentLanguage = 'en';

  return (
    <Container maxWidth="lg">
      <SinglePageSurveyView
        surveyDefinition={QG0}
      />
      <Box height={250}></Box>
      <Paper>
        <Box p={2} mt={2}>
          <MultipleChoice
            question={testQuestion}
            languageCode={currentLanguage}
            responsePrefill={{
              key: 'RG1',
              items: [
                { key: 'RG1.R1' }
              ]
            }}
            responseChanged={(selections: ResponseItem | undefined) => {
              console.log('todo: handle answer - ', selections);
            }}
          />
        </Box>
      </Paper>
    </Container>
  )
}

export default MyStudies;
