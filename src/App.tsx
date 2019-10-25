import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Info from './components/Info';
// import Login from './components/form/login/Login';
// import Signup from './components/form/signup/Signup';

import Button from '@material-ui/core/Button';
import { createMuiTheme, StylesProvider, MuiThemeProvider } from '@material-ui/core';
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
        <div className={'App'}>
        <Router>
          <NavBar/>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Switch>
            {/*<Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>*/}
            <Route path="/" component={Info}/>
          </Switch>
        </Router>
        </div>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;