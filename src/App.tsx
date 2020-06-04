import React, { useEffect } from 'react';
import './App.scss';
import { Helmet } from 'react-helmet';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import AuthPages from './pages/AuthPages/AuthPages';
import Home from './pages/Home/Home';

import {
  createMuiTheme,
  StylesProvider,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import InfluenzaNetThemeData from './themes/influenzanet-theme';
import SISThemeData from './themes/sis-theme';
import PWCThemeData from './themes/pwc-theme';

import { RootState } from './store';
import { useSelector } from 'react-redux';
import i18n from './i18n';
import LinkResolver from './pages/LinkResolver/LinkResolver';
import Landing from './pages/Landing/Landing';
import { AppRoutes } from './routes/root';
import { AuthPagesPaths } from './routes';
import { useAuthTokenCheck } from './hooks';
import { urlWithRedirect } from './routes/utils/routeUtils';


const App: React.FC = () => {
  const { t } = useTranslation(['app']);
  const location = window.location.pathname + window.location.search;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const themeParam = urlParams.get('theme');

  const language = useSelector((state: RootState) => state.user.currentUser.account.preferredLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
        display: "flex",
        justifyContent: "space-between",
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
      },
      markLabel: {
        '&&:nth-of-type(4)': {
          textAlign: "left",
          flexGrow: 1,
          marginLeft: -4,
          marginRight: 4,
        },
        '&&:nth-last-of-type(2)': {
          textAlign: "right",
          flexGrow: 1,
          marginLeft: 4,
          marginRight: -4,
        },
        '&&:nth-last-of-type(3)': {
          textAlign: "right",
          flexGrow: 1,
          marginLeft: 4,
          marginRight: -4,
        },
        marginTop: 12,
        height: 20,
        position: "static",
        textAlign: "center",
        transform: "",
        flexGrow: 2,
        flexShrink: 1,
        flexBasis: 0,
        // textOverflow: "ellipsis",
        // overflow: "hidden",
      },
    },
  };

  const hasAuthTokens = useAuthTokenCheck();

  const authRoutes = <Switch>
    <Route path={AppRoutes.Home} component={Home} />
    <Route path={AppRoutes.UserAuth} component={AuthPages} />
    <Route path={AppRoutes.LinkResolver} component={LinkResolver} />
    <Route path={AppRoutes.Landing} component={Landing} />
    <Redirect to={AppRoutes.Home}></Redirect>
  </Switch>

  const noAuthRoutes = <Switch>
    <Route path={AppRoutes.UserAuth} component={AuthPages} />
    <Route path={AppRoutes.LinkResolver} component={LinkResolver} />
    <Route path={AppRoutes.Landing} component={Landing} />
    <Redirect to={urlWithRedirect(AuthPagesPaths.Login, location)}></Redirect>
  </Switch>

  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Helmet>
          <title>{t('header.title')}</title>
          <meta name="description" content={t('header.metaDescription')} />
        </Helmet>
        <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : undefined}>
          <Switch>
            {hasAuthTokens ? authRoutes : noAuthRoutes}
          </Switch>
        </Router>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;
