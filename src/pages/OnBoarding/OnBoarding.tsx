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
import Confirmation from './Confirmation/Confirmation';
import ChangeEmailAddress from './Confirmation/ChangeEmailAddress/ChangeEmailAddress';


export const OnBoardingPaths = {
  Landing: "/start",
  Login: "/start/login",
  Signup: "/start/signup",
  Confirmation: "/start/confirmation",
  ChangeEmailAddress: "/start/confirmation/change-email-address",
}


const OnBoarding: React.FC = () => {
  const history = useHistory();

  const onLoggedIn = (userAuthenticatedAt: number) => {
    if (userAuthenticatedAt && Number(userAuthenticatedAt) > 0) {
      history.push(HomePaths.Dashboard);
    } else {
      history.push(OnBoardingPaths.Confirmation);
    }
  }

  return (
    <Switch>
      <Route path={OnBoardingPaths.Landing} exact component={Landing} />
      <Route path={OnBoardingPaths.Login} render={(props) => <Login {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={OnBoardingPaths.Signup} render={(props) => <Signup {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={OnBoardingPaths.Confirmation} exact component={Confirmation} />
      <Route path={OnBoardingPaths.ChangeEmailAddress} component={ChangeEmailAddress} />
      <Redirect to={OnBoardingPaths.Landing}></Redirect>
    </Switch>

  );
}

export default OnBoarding;
