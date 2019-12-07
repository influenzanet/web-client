import React, { useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setPageTitle } from '../../../store/navigation/actions';


const Dashboard: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Influenzanet'));
    });

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;