import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Info from './components/Info';
import Login from './components/form/login/Login';
import Signup from './components/form/signup/Signup';
import { createMuiTheme, StylesProvider, MuiThemeProvider } from '@material-ui/core';
import TestForm from './components/form/login/LoginForm';


const App: React.FC = () => {
  


  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4b669d',
      },
      secondary: {
        main: '#61b1b0',
      },
    },
  });
  

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>
            <Route path="/" component={Info}/>
          </Switch>
        </Router>
      </StylesProvider>  
    </MuiThemeProvider>
  );
}

export default App;