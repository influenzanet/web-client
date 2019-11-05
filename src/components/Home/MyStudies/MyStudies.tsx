import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { SET_PAGE_TITLE } from '../../../store/actions/actionTypes';

import { SurveyEngineCore, testSurvey } from '../../../survey-engine/engine';
import {} from '../../../survey-engine/dataTypes';

const MyStudies: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // const survey = renderSurvey({ surveyDef: testSurvey});
        const context = {
            mode: 'test',
        }
        const sEngine = new SurveyEngineCore(testSurvey, 'me', 'someone else', context);

        /*if (survey.surveyState) {
            printRenderedSurvey(survey.surveyState);
        }*/
        console.log(sEngine.responses);
        sEngine.printRenderedSurvey();

        sEngine.setResponse('qg3', 'q2', 1);
        sEngine.printRenderedSurvey();

        dispatch({ type: SET_PAGE_TITLE, title: 'My Studies'});
    });

    return (

        <div>
            My Studies
        </div>
    )
}

export default MyStudies;