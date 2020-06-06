import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Signup from './Signup/Signup';
import Login from './Login/Login';
import SignupSuccess from './SignupSuccess/SignupSuccess';
import { AuthPagesPaths } from '../../routes';


const AuthPages: React.FC = () => {
  return (
    <Switch>
      <Route path={AuthPagesPaths.Login} component={Login} />
      <Route path={AuthPagesPaths.Signup} component={Signup} />
      <Route path={AuthPagesPaths.SignupSuccess} component={SignupSuccess} />
      <Redirect to={AuthPagesPaths.Login}></Redirect>
    </Switch>

  );
}

export default AuthPages;
