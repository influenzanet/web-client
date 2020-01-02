import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';
import SingleChoice from '../../../components/survey/question-types/basic/single-choice/SingleChoice';
import { Question } from 'survey-engine/lib/data_types';

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

    <div>
      My Studies
      <SingleChoice
        question={testQuestion}
        languageCode="de"
      />
    </div>
  )
}

export default MyStudies;
