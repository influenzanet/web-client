import React from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';

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
  responsiveFontSizes,
} from '@material-ui/core';
import AppIntegration from './pages/AppIntegration/AppIntegration';
import { useTranslation } from 'react-i18next';
import InfluenzaNetThemeData from './themes/influenzanet-theme';
import SISThemeData from './themes/sis-theme';
import PWCThemeData from './themes/pwc-theme';

// import TestForm from './components/form/login/LoginForm';

const App: React.FC = () => {
  const { t } = useTranslation(['app']);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const themeParam = urlParams.get('theme');

  let themeData = {};

  switch (themeParam) {
    case 'influenzaNet':
      themeData = InfluenzaNetThemeData;
      break;
    case 'pwc':
      themeData = PWCThemeData;
      break;
    case 'sis':
      themeData = SISThemeData;
      break;
    default:
      themeData = InfluenzaNetThemeData;
  }

  const theme = responsiveFontSizes(createMuiTheme(themeData));

  theme.overrides = {
    MuiSlider: {
      root: {
        height: 6,
      },
      thumb: {
        height: 16,
        width: 16,
        marginTop: -5,
        marginLeft: -8,
      },
      rail: {
        height: 6,
        borderRadius: 1000,
        color: "#9e9e9e",
      },
      track: {
        height: 6,
        borderRadius: 1000,
      },
      mark: {
        height: 6,
        width: 6,
        marginLeft: -3,
        borderRadius: 1000,
        backgroundColor: "grey",
      },
      markActive: {
        opacity: 1,
        backgroundColor: theme.palette.secondary.main,
        height: 10,
        width: 10,
        marginLeft: -5,
        marginTop: -2,
      }
    },
  };


  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Helmet>
          <title>{t('header.title')}</title>
          <meta name="description" content={t('header.metaDescription')} />
        </Helmet>
        <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : undefined}>
          <Switch>
            {/*<Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/testForm" component={TestForm}/>*/}
            <Route path="/home" component={Home} />
            <Route path="/start" component={OnBoarding} />
            <Route path="/app-integration" component={AppIntegration} />
            <Redirect to="/start"></Redirect>
          </Switch>
        </Router>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
