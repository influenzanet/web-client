import React, { useState } from 'react';
import { makeStyles, Typography, Link, Box, Grid } from '@material-ui/core';
import CenterPage from '../../../components/ui/pages/CenterPage';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import FlexGrow from '../../../components/common/FlexGrow';
import { useTranslation } from 'react-i18next';
import { resendVerificationEmailReq } from '../../../api/user-management-api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import RoundedBox from '../../../components/ui/RoundedBox';

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
  button: {
    fontSize: "18px",
  }
}));

const Confirmation: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation(['app']);
  const emailAddress = useSelector((state: RootState) => state.user.currentUser.account.accountId);

  let [loading, setLoading] = useState(false);
  let [confirmationSent, setConfirmationSent] = useState(false);

  const onResendClicked = () => {
    resendConfirmation();
  }

  const resendConfirmation = async () => {
    if (loading) return;
    setLoading(true);
    try {
      let response = await resendVerificationEmailReq(emailAddress);
      setConfirmationSent(true);
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
            {t("app:confirmationPage.headline")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="secondary">
            {t("app:confirmationPage.description")}
          </Typography>
        </Grid>
        <Grid item>
          {
            (confirmationSent)
              ? <RoundedBox classNames={[classes.message]}>
                {t("app:confirmationPage.resendSuccessMessage")}
              </RoundedBox>
              : <RoundedButton color="primary" className={classes.button} onClick={onResendClicked} disabled={loading}>
                {t("app:confirmationPage.resendLinkButtonLabel")}
              </RoundedButton>
          }

        </Grid>
        <Grid item>
          <Link>
            {t("app:confirmationPage.changeEmailLink")}
          </Link>
        </Grid>
      </Grid>
      <FlexGrow />
    </CenterPage >
  );
};

export default Confirmation;
