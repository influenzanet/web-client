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
import { useMountEffect } from '../../hooks';
import LoadingDialog from '../../components/ui/dialogs/LoadingDialog';
import { appendParameterToPath } from '../../routes/utils/routeUtils';
import { useUpdateStudies } from '../../hooks/useUpdateStudies';



export const Home: React.FC = () => {
  const showNavigation = useSelector((state: RootState) => state.navigation.showNavigation);
  const [loading, getAllStudies] = useUpdateStudies();

  useMountEffect(() => {
    getAllStudies();
  });

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
      <LoadingDialog open={loading} />
    </React.Fragment>
  )
}


export default Home;


