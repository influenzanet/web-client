import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import OnBoarding from './pages/OnBoarding/OnBoarding';
import Home from './pages/Home/Home';
// import Login from './components/form/login/Login';
// import Signup from './components/form/signup/Signup';

import {
  createMuiTheme,
  StylesProvider,
  MuiThemeProvider,
} from '@material-ui/core';

// import TestForm from './components/form/login/LoginForm';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#475d9d',
        dark: '#000e42',
        main: '#0f346e',
      },
      secondary: {
        light: '#93e3e2',
        dark: '#2d8181',
        main: '#61b1b0',
        contrastText: '#ffffff',
      },
      background: {
        default: '#f2f2f2',
      }
    },
  });


  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Router>
          <Switch>
            {/*<Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>*/}
            <Route path="/home" component={Home} />
            <Route path="/start" component={OnBoarding} />
            <Redirect to="/start"></Redirect>
          </Switch>
        </Router>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
