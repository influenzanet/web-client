import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import MonitoringDemo from './MonitoringDemo/MonitoringDemo';
import ParticipantDemo from './ParticipantDemo/ParticipantDemo';


const Demo: React.FC = () => {
  let { path: rootPath } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${rootPath}/participants`} component={ParticipantDemo} />
      <Route path={`${rootPath}/monitoring`} component={MonitoringDemo} />
      <Redirect to={`${rootPath}/participants`}></Redirect>
    </Switch>
  );
};

export default Demo;
