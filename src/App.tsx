import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Info from './components/Info';
import Login from './components/form/login/Login';
import Signup from './components/form/signup/Signup';


const App: React.FC = () => {
  

  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/" component={Info}/>
        </Switch>
      </Router>
  );
}

export default App;