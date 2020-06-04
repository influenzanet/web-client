import React, { useState } from 'react';
import { makeStyles, Typography, Link, Grid } from '@material-ui/core';
import CenterPage from '../../../components/ui/pages/CenterPage';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import FlexGrow from '../../../components/common/FlexGrow';
import { useTranslation } from 'react-i18next';
import { resendVerificationEmailReq } from '../../../api/user-management-api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import RoundedBox from '../../../components/ui/RoundedBox';

import { LinkRef } from '../../../components/common/link';
import { AuthPagesPaths } from '../../../routes';

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  message: {
    fontSize: "18px",
    fontWeight: "bold",
    color: theme.palette.success.main,
  },
  spacer: {
    height: 32,
  },
  button: {
    fontSize: "18px",
  }
}));

const Activation: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation(['app']);
  const emailAddress = useSelector((state: RootState) => state.user.currentUser.account.accountId);

  let [loading, setLoading] = useState(false);
  let [confirmationSent, setConfirmationSent] = useState(false);

  const onResendClicked = () => {
    resendActivation();
  }

  const resendActivation = async () => {
    if (loading) return;
    setLoading(true);
    try {
      let response = await resendVerificationEmailReq(emailAddress);
      if (response.status === 200) {
        setConfirmationSent(true);
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  return (
    <CenterPage>
      <FlexGrow />
      <Grid spacing={2} container className={classes.box}>
        <Grid item>
          <Typography variant="h3" color="primary">
            {t("app:activationPage.headline")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="secondary">
            {t("app:activationPage.description")}
          </Typography>
        </Grid>
        <div className={classes.spacer} />
        <Grid item>
          {
            (confirmationSent)
              ? <RoundedBox classNames={[classes.message]}>
                {t("app:activationPage.resendSuccessMessage")}
              </RoundedBox>
              : <RoundedButton color="primary" className={classes.button} onClick={onResendClicked} disabled={loading}>
                {t("app:activationPage.resendLinkButtonLabel")}
              </RoundedButton>
          }
        </Grid>
        <Grid item>
          <Link component={LinkRef} to={AuthPagesPaths.Signup}>
            {t("app:activationPage.changeEmailLink")}
          </Link>
        </Grid>
      </Grid>
      <FlexGrow />
    </CenterPage >
  );
};

export default Activation;
