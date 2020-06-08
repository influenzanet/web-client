import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import NavBar from '../../components/Navigation/NavBar/NavBar';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import Dashboard from './Dashboard/Dashboard';
import MyStudies from './MyStudies/MyStudies';
import { HomePaths } from '../../routes';
import ProfileSelection from './Profile/ProfileSelection/ProfileSelection';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import StudyDetail from './Dashboard/StudyDetail/StudyDetail';
import { appendParameterToPath } from '../../routes/utils/routeUtils';


export const Home: React.FC = () => {
  const showNavigation = useSelector((state: RootState) => state.navigation.showNavigation);

  return (
    <React.Fragment>
      {showNavigation
        ? <React.Fragment>
          <NavBar />
          <Drawer side="left"></Drawer>
        </React.Fragment>
        : null}
      <Switch>
        <Route path={HomePaths.Dashboard} exact component={Dashboard} />
        <Route path={appendParameterToPath(HomePaths.StudyDetail.path, HomePaths.StudyDetail.parameter)} component={StudyDetail} />
        <Route path={HomePaths.MyStudies} component={MyStudies} />
        <Route path={HomePaths.Profiles} component={ProfileSelection} />
        <Redirect to={HomePaths.Dashboard}></Redirect>
      </Switch>
    </React.Fragment>
  )
}


export default Home;


