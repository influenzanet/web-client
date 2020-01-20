import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import SingleChoice from '../../../components/survey/question-types/basic/single-choice/SingleChoice';
import { Question } from 'survey-engine/lib/data_types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const MyStudies: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const survey = renderSurvey({ surveyDef: testSurvey});
    dispatch(setPageTitle('My Studies'));
  });


  const testQuestion: Question = {
    key: 'Q-TEST',
    type: 'basic.input.single-choice',
    version: 1,
    versionTags: [],
    validations: [],
    components: [
      {
        key: 'TITLE', role: 'title', content: [
          { code: 'en', parts: ['Test question ', '1'] },
          { code: 'de', parts: ['Testfrage ', '1'] }
        ]
      }, // displayCondition: {}
      {
        key: 'RESPS', role: 'responseGroup', items: [
          {
            key: 'R1', role: 'option', content: [
              { code: 'en', parts: ['Answer ', '1'] },
              { code: 'de', parts: ['Antwort ', '1'] }
            ]
          },
          {
            key: 'R2', role: 'option', content: [
              { code: 'en', parts: ['Answer ', '2'] },
              { code: 'de', parts: ['Antwort ', '2'] }
            ]
          },
        ]
      }
    ]
  }

  return (
    <Container maxWidth="lg">
      My Studies
      <Paper>
        <Box p={2}>
          <SingleChoice
            question={testQuestion}
            languageCode="en"
            answerSelected={(selectedAnswer: string | undefined) => {
              console.log('todo: handle answer - ' + selectedAnswer);

            }}
          />
        </Box>
      </Paper>

      <Paper>
        <Box p={2} mt={2}>
          <SingleChoice
            question={testQuestion}
            languageCode="en"
            answerSelected={(selectedAnswer: string | undefined) => {
              console.log('todo: handle answer - ' + selectedAnswer);

            }}
          />
        </Box>
      </Paper>
    </Container>
  )
}

export default MyStudies;
