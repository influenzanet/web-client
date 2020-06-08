import React from 'react';
import { useDispatch } from 'react-redux';
import { useMountEffect } from '../../../../hooks';
import { navigationActions } from '../../../../store/navigation/navigationSlice';

const FullscreenHomePage: React.FC = (props) => {
  const dispatch = useDispatch();

  useMountEffect(() => {
    dispatch(navigationActions.setShowNavigation(false));
  });

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
};

export default FullscreenHomePage;
