import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux'
import { navigationActions } from '../../../store/navigation/navigationSlice';


const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationActions.setPageTitle('InfluenzaNet'));
  });

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard;
