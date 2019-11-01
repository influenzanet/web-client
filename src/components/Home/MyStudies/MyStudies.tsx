import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { SET_PAGE_TITLE } from '../../../store/actions/actionTypes';

import {renderSurvey, testSurvey, printRenderedSurvey} from '../../../survey-engine/engine';
import {} from '../../../survey-engine/dataTypes';

const MyStudies: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const survey = renderSurvey({ surveyDef: testSurvey});

        if (survey.surveyState) {
            printRenderedSurvey(survey.surveyState);
        }


        dispatch({ type: SET_PAGE_TITLE, title: 'My Studies'});
    });

    return (

        <div>
            My Studies
        </div>
    )
}

export default MyStudies;