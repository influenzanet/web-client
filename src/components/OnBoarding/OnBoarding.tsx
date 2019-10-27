import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Info from './Info/Info';
import { Login } from './Login/Login';

// import logo from '../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
// import Button from '@material-ui/core/Button';


const OnBoarding: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/*<Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>*/}
        <Route path="/start" exact component={Info} />
        <Route path="/start/login" component={Login} />
        <Route path="/start/signup" component={Login} />
        <Redirect to="/start"></Redirect>
      </Switch>
    </Router>
  );
}

export default OnBoarding;
