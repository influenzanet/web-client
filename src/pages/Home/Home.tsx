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

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Drawer side="left"></Drawer>
            <Switch>
                <Route path="/home" exact component={Dashboard} />
                <Route path="/home/my-studies" component={MyStudies} />
                <Redirect to="/home"></Redirect>
            </Switch>
        </React.Fragment>
    )
}


export default Home;


