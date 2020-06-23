import React from 'react';
import NavigationHomePage from './NavigationHomePage';
import { useMountEffect } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { navigationActions } from '../../../../store/navigation/navigationSlice';

interface DetailHomePageProps {
  title: string;
}

const DetailHomePage: React.FC<DetailHomePageProps> = (props) => {
  const dispatch = useDispatch();

  useMountEffect(() => {
    dispatch(navigationActions.setShowBackBtn(true));
    dispatch(navigationActions.setShowProfileSelection(true));
    dispatch(navigationActions.setShowMenuButton(true));
  });

  return (
    <NavigationHomePage title={props.title}>
      {props.children}
    </NavigationHomePage>
  );
};

export default DetailHomePage;
