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
import { useAuthTokenCheck } from '../../hooks';
import { urlWithRedirect } from '../../routes/utils/routeUtils';


const AuthPages: React.FC = () => {
  const hasAuthTokens = useAuthTokenCheck();
  const location = window.location.pathname + window.location.search;

  return (
    <Switch>
      <Route path={AuthPagesPaths.Login} component={Login} />
      <Route path={AuthPagesPaths.Signup} component={Signup} />
      {hasAuthTokens ? <Route path={AuthPagesPaths.SignupSuccess} component={SignupSuccess} /> : null}
      <Redirect to={urlWithRedirect(AuthPagesPaths.Login, location)}></Redirect>
    </Switch>

  );
}

export default AuthPages;
