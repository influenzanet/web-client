import React from 'react';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './Landing/Landing';
import Signup from './Signup/Signup';
import Login  from './Login/Login';

// import logo from '../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
// import Button from '@material-ui/core/Button';


const OnBoarding: React.FC = () => {
  return (

      <Switch>
        {/*<Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>*/}
        <Route path="/start" exact component={Landing} />
        <Route path="/start/login" component={Login} />
        <Route path="/start/signup" component={Signup} />
        <Redirect to="/start"></Redirect>
      </Switch>

  );
}

export default OnBoarding;
