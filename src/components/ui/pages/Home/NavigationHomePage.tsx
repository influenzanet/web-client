import React from 'react';
import { useMountEffect } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { navigationActions } from '../../../../store/navigation/navigationSlice';

interface NavigationHomePageProps {
  title: string,
}

const NavigationHomePage: React.FC<NavigationHomePageProps> = (props) => {
  const dispatch = useDispatch();

  useMountEffect(() => {
    dispatch(navigationActions.setShowNavigation(true));
    dispatch(navigationActions.setShowBackBtn(false));
    dispatch(navigationActions.setShowMenuButton(true));
    if (props.title) {
      dispatch(navigationActions.setPageTitle(props.title));
    }
  });

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
};

export default NavigationHomePage;
