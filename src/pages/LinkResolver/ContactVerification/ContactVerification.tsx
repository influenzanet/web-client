import React, { useState } from 'react';
import { useMountEffect, useQuery } from '../../../hooks';
import { verifyContactReq } from '../../../api/user-management-api';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../store/user/userSlice';
import { RootState } from '../../../store';
import { Typography, CircularProgress, makeStyles, Container } from '@material-ui/core';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { HomePaths, AuthPagesPaths } from '../../../routes';

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

  const accountConfirmedAt = useSelector((state: RootState) => state.user.currentUser.account.accountConfirmedAt);

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
      console.error(e);
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
        <RoundedButton className={classes.button} color="primary" onClick={() => history.push(HomePaths.Dashboard)}>
          {t("app:verificationPage.successButtonLabel")}
        </RoundedButton>
      </Container>
    );
  }

  const failure = () => {
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

  return (
    <CenterPage>
      <FlexGrow />
      {(loading)
        ? waiting()
        : (confirmed)
          ? success()
          : failure()
      }
      <FlexGrow />
    </CenterPage>
  );
};

export default VerifyToken;
