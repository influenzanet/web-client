import React, { useState } from 'react';
import { useMountEffect, useQuery, useAuthTokenCheck } from '../../../hooks';
import { verifyContactReq } from '../../../api/user-management-api';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../store/user/userSlice';
import { RootState } from '../../../store';
import { Typography, CircularProgress, makeStyles, Container } from '@material-ui/core';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { HomePaths, AuthPagesPaths } from '../../../routes';
import { urlWithRedirect } from '../../../routes/utils/routeUtils';
import { switchProfileReq } from '../../../api/auth-api';
import { setDefaultAccessTokenHeader } from '../../../api/instances/auth-api-instance';
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants';
import { Profile } from '../../../types/user';

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
  },
  spacer: {
    height: 32,
  },
  button: {
    fontSize: "18px",
  }
}));

const VerifyToken: React.FC = () => {
  const classes = useStyles();
  const query = useQuery();
  const token = query.get("token");

  const dispatch = useDispatch();
  const history = useHistory();

  const { t } = useTranslation(['app']);

  const loggedIn = useAuthTokenCheck();
  const accountConfirmedAt = useSelector((state: RootState) => state.user.currentUser.account.accountConfirmedAt);
  const refreshToken = useSelector((state: RootState) => state.api.refreshToken);

  const location = useLocation();

  let [loading, setLoading] = useState(false);
  let [confirmed, setConfirmed] = useState(Number(accountConfirmedAt) > 0);

  useMountEffect(() => {
    verifyToken();
  });

  const verifyToken = async () => {
    if (loading || confirmed || !token) return;
    setLoading(true);

    try {
      let response = await verifyContactReq(token);
      if (response.status === 200) {
        dispatch(userActions.setUser(response.data));
        if (loggedIn) {
          try {
            if (response.data.profiles.length > 0) {
              await renewTokenForProfile(response.data.profiles[0])
            }
          } catch (e) {
            console.error(e.response);
          }
        }
        setConfirmed(true);
      }
    } catch (e) {
      console.error(e.response);
    }
    setLoading(false);
  };

  const renewTokenForProfile = async (profile: Profile) => {
    const response = await switchProfileReq({
      profileId: profile.id,
      refreshToken: refreshToken,
    });

    let tokenRefreshedAt = new Date().getTime();

    dispatch(apiActions.setState({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
    }));

    setDefaultAccessTokenHeader(response.data.accessToken);
    dispatch(userActions.setFromTokenResponse(response.data));
  }

  const waiting = () => {
    return (
      <Container className={classes.container}>
        <Typography variant="h3" color="primary">
          {t("app:verificationPage.waitingTitle")}
        </Typography>
        <div className={classes.spacer} />
        <CircularProgress color="secondary" />
      </Container>
    );
  }

  const success = () => {
    return (
      <Container className={classes.container}>
        <Typography variant="h3" color="primary">
          {t("app:verificationPage.successTitle")}
        </Typography>
        <Typography variant="h5" color="secondary">
          {t("app:verificationPage.successSubtitle")}
        </Typography>
        <div className={classes.spacer} />
        <RoundedButton className={classes.button} color="primary" onClick={() =>
          history.push(HomePaths.Dashboard)
        }>
          {t("app:verificationPage.successButtonLabel")}
        </RoundedButton>
      </Container>
    );
  }

  const failureWhileLoggedIn = () => {
    return (
      <Container className={classes.container}>
        <Typography variant="h3" color="primary">
          {t("app:verificationPage.failureTitle")}
        </Typography>
        <Typography variant="h5" color="secondary">
          {t("app:verificationPage.failureSubtitle")}
        </Typography>
        <div className={classes.spacer} />
        <RoundedButton className={classes.button} color="primary" onClick={() => history.push(AuthPagesPaths.SignupSuccess)}>
          {t("app:verificationPage.activationButtonLabel")}
        </RoundedButton>
      </Container>
    );
  }

  const failureWhileLoggedOut = () => {
    return (
      <Container className={classes.container}>
        <Typography variant="h3" color="primary">
          {t("app:verificationPage.failureTitleLoggedOut")}
        </Typography>
        <Typography variant="h5" color="secondary">
          {t("app:verificationPage.failureSubtitleLoggedOut")}
        </Typography>
        <div className={classes.spacer} />
        <RoundedButton className={classes.button} color="primary" onClick={() => history.push(urlWithRedirect(AuthPagesPaths.Login, location.pathname + location.search))}>
          {t("app:verificationPage.loginButtonLabel")}
        </RoundedButton>
      </Container>
    );
  }

  return (
    <CenterPage>
      <FlexGrow />
      {loading
        ? waiting()
        : confirmed
          ? success()
          : loggedIn
            ? failureWhileLoggedIn()
            : failureWhileLoggedOut()
      }
      <FlexGrow />
    </CenterPage>
  );
};

export default VerifyToken;
