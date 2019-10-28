import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { SET_PAGE_TITLE } from '../../../store/actions/actionTypes';

const MyStudies: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_PAGE_TITLE, title: 'My Studies'});
    });

    return (

        <div>
            My Studies
        </div>
    )
}

export default MyStudies;