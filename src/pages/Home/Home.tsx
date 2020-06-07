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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import StudyDetail from './Dashboard/StudyDetail/StudyDetail';
import { useAsyncCall, useMountEffect } from '../../hooks';
import { getStudiesForUserReq, getAllAvailableStudiesReq } from '../../api/study-api';
import { studyActions } from '../../store/study/studySlice';
import LoadingDialog from '../../components/ui/dialogs/LoadingDialog';
import { appendParameter } from '../../routes/utils/routeUtils';



export const Home: React.FC = () => {
  const showNavigation = useSelector((state: RootState) => state.navigation.showNavigation);
  const dispatch = useDispatch();
  const [loading, asyncCall] = useAsyncCall();

  useMountEffect(() => {
    getAllStudies();
  });

  const getAllStudies = async () => {
    await getSubscribedStudies();
    await getAvailableStudies();
  }

  const getSubscribedStudies = async () => {
    await asyncCall(async () => {
      const response = await getStudiesForUserReq();
      dispatch(studyActions.setSubscribedStudies((response.data.studies) ? response.data.studies : []));
    });
  }

  const getAvailableStudies = async () => {
    await asyncCall(async () => {
      const response = await getAllAvailableStudiesReq();
      dispatch(studyActions.setAvailableStudies((response.data.studies) ? response.data.studies : []));
    });
  }

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
        <Route path={appendParameter(HomePaths.StudyDetail.path, HomePaths.StudyDetail.parameter)} component={StudyDetail} />
        <Route path={HomePaths.MyStudies} component={MyStudies} />
        <Route path={HomePaths.Profiles} component={ProfileSelection} />
        <Redirect to={HomePaths.Dashboard}></Redirect>
      </Switch>
      <LoadingDialog open={loading} />
    </React.Fragment>
  )
}


export default Home;


