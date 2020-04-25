import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

const ParticipantDemo: React.FC = () => {
  let { path: rootPath } = useRouteMatch();

  return (
    <React.Fragment>
      <Switch>
        {/*<Route path={`${rootPath}/dashboard`} component={} />*/}
        <Redirect to={`${rootPath}/dashboard`}></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default ParticipantDemo;
