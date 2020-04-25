import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import SurveyEnd from './SurveyEnd/SurveyEnd';
import Survey from './Survey/Survey';
import Landing from './Landing/Landing';

const ParticipantDemo: React.FC = () => {
  let { path: rootPath } = useRouteMatch();

  return (
    <React.Fragment>
      <AppBar />
      <Switch>
        <Route path={`${rootPath}/landing`} component={Landing} />
        <Route path={`${rootPath}/survey`} component={Survey} />
        <Route path={`${rootPath}/survey-end`} component={SurveyEnd} />
        <Redirect to={`${rootPath}/landing`}></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default ParticipantDemo;
