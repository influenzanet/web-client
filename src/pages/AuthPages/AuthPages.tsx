import React from 'react';

import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';

import Signup from './Signup/Signup';
import Login from './Login/Login';
import SignupSuccess from './SignupSuccess/SignupSuccess';
import { HomePaths, AuthPagesPaths } from '../../routes';




const AuthPages: React.FC = () => {
  const history = useHistory();

  const onLoggedIn = (userAuthenticatedAt: number) => {
    if (userAuthenticatedAt && Number(userAuthenticatedAt) > 0) {
      history.replace(HomePaths.Dashboard);
    } else {
      history.replace(AuthPagesPaths.SignupSuccess);
    }
  }

  return (
    <Switch>
      <Route path={AuthPagesPaths.Login} render={(props) => <Login {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={AuthPagesPaths.Signup} render={(props) => <Signup {...props} onLoggedIn={onLoggedIn} />} />
      <Route path={AuthPagesPaths.SignupSuccess} component={SignupSuccess} />
      <Redirect to={AuthPagesPaths.Login}></Redirect>
    </Switch>

  );
}

export default AuthPages;
