import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router';
import { useAuthTokenCheck } from '../../hooks';
import { AppRoutes, AuthPagesPaths } from '../../routes';
import Home from '../../pages/Home/Home';
import AuthPages from '../../pages/AuthPages/AuthPages';
import LinkResolver from '../../pages/LinkResolver/LinkResolver';
import Landing from '../../pages/Landing/Landing';
import { urlWithRedirect } from '../../routes/utils/routeUtils';

const AuthSwitch: React.FC = () => {
  const hasAuthTokens = useAuthTokenCheck();
  const location = useLocation();

  const fullPath = location.pathname + location.search;

  const authRoutes = <Switch>
    <Route path={AppRoutes.Home} component={Home} />
    <Route path={AppRoutes.UserAuth} component={AuthPages} />
    <Route path={AppRoutes.LinkResolver} component={LinkResolver} />
    <Route path={AppRoutes.Landing} component={Landing} />
    <Redirect to={AppRoutes.Home}></Redirect>
  </Switch>

  const noAuthRoutes = <Switch>
    <Route path={AppRoutes.UserAuth} component={AuthPages} />
    <Route path={AppRoutes.LinkResolver} component={LinkResolver} />
    <Route path={AppRoutes.Landing} component={Landing} />
    <Redirect to={urlWithRedirect(AuthPagesPaths.Login, fullPath)}></Redirect>
  </Switch>

  return (
    <Switch>
      {hasAuthTokens ? authRoutes : noAuthRoutes}
    </Switch>
  );
};

export default AuthSwitch;
