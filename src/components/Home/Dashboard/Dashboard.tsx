import React, { useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { SET_PAGE_TITLE } from '../../../store/actions/actionTypes';


const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_PAGE_TITLE, title: 'Influenzanet'});
    });

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;