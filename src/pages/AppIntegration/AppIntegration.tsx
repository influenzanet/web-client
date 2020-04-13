import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import SurveyWithAuth from './SurveyWithAuth/SurveyWithAuth';

const AppIntegration: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/app-integration/survey-auth" component={SurveyWithAuth} />
        <Redirect to="/app-integration/survey-auth"></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default AppIntegration;
