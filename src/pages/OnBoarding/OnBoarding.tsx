import React from 'react';

import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import { HomePaths } from '../Home/Home';
import Activation from './Confirmation/Activation';
import VerifyToken from './Confirmation/VerifyToken/VerifyToken';


export const OnBoardingPaths = {
  Landing: "/start",
  Login: "/start/login",
  Signup: "/start/signup",
  Activation: "/start/activation",
  VerifyToken: "/start/activation/verify-token",
}


const OnBoarding: React.FC = () => {
  const history = useHistory();

  const onLoggedIn = (userAuthenticatedAt: number) => {
    if (userAuthenticatedAt && Number(userAuthenticatedAt) > 0) {
      history.push(HomePaths.Dashboard);
    } else {
      history.push(OnBoardingPaths.Activation);
    }
  }

  return (
    <Switch>
      <Route path={OnBoardingPaths.Landing} exact component={Landing} />
      <Route path={OnBoardingPaths.Login} render={(props) => <Login {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={OnBoardingPaths.Signup} render={(props) => <Signup {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={OnBoardingPaths.Activation} exact component={Activation} />
      <Route path={OnBoardingPaths.VerifyToken} component={VerifyToken} />
      <Redirect to={OnBoardingPaths.Landing}></Redirect>
    </Switch>

  );
}

export default OnBoarding;
