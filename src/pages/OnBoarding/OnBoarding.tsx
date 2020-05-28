import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login from './Login/Login';

// import logo from '../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
// import Button from '@material-ui/core/Button';
export const OnBoardingPaths = {
  Landing: "/start",
  Login: "/start/login",
  Signup: "/start/signup",
}


const OnBoarding: React.FC = () => {
  return (
    <Switch>
      <Route path={OnBoardingPaths.Landing} exact component={Landing} />
      <Route path={OnBoardingPaths.Login} component={Login} />
      <Route path={OnBoardingPaths.Signup} component={Signup} />
      <Redirect to={OnBoardingPaths.Landing}></Redirect>
    </Switch>

  );
}

export default OnBoarding;
