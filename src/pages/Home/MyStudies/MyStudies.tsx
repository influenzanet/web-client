import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';

const MyStudies: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // const survey = renderSurvey({ surveyDef: testSurvey});
        dispatch(setPageTitle('My Studies'));
    });

    return (

        <div>
            My Studies
        </div>
    )
}

export default MyStudies;