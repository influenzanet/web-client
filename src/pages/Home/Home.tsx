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



export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Drawer side="left"></Drawer>
      <Switch>
        <Route path={HomePaths.Dashboard} exact component={Dashboard} />
        <Route path={HomePaths.MyStudies} component={MyStudies} />
        <Redirect to={HomePaths.Dashboard}></Redirect>
      </Switch>
    </React.Fragment>
  )
}


export default Home;


