import React from 'react';
import { AppBar } from './AppBar/AppBar';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import SurveyPage from './SurveyPage/SurveyPage';
import SurveyEndPage from './SurveyEndPage/SurveyEndPage';
import ClosePage from './ClosePage/ClosePage';

const SurveyWithAuth: React.FC = () => {
  let { path: rootPath } = useRouteMatch();

  return (
    <React.Fragment>
      <AppBar />
      <Switch>
        <Route path={`${rootPath}/survey`} component={SurveyPage} />
        <Route path={`${rootPath}/survey-end`} component={SurveyEndPage} />
        <Route path={`${rootPath}/close`} component={ClosePage} />
        <Redirect to={`${rootPath}/survey`}></Redirect>
      </Switch>
    </React.Fragment>
  );
};

export default SurveyWithAuth;
