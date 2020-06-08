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
        setConfirmed(true);
      }
    } catch (e) {
      console.error(e.response);
    }

    setLoading(false);
  };

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
