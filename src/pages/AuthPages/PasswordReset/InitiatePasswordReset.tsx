import React, { useState, ChangeEvent } from 'react';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { Typography, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useAsyncCall, useStyles } from '../../../hooks';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import RoundedBox from '../../../components/ui/RoundedBox';
import { initiatePasswordResetReq } from '../../../api/user-management-api';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

const InitiatePasswordReset: React.FC = () => {
  const classes = useStyles(theme => ({
    centerText: {
      textAlign: "center",
    },
    successMessage: {
      color: theme.palette.success.main,
    }
  }));

  const { t } = useTranslation(['app']);
  const [loading, asyncCall] = useAsyncCall();
  const [emailAddress, setEmailAddress] = useState("");
  const [mailSent, setMailSent] = useState(false);

  const instanceId = useSelector((state: RootState) => state.general.instanceId);

  const handleEmailAdressChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailAddress(event.target.value);
  }

  const onResetPasswordClicked = () => {
    asyncCall(async () => {
      const response = await initiatePasswordResetReq(instanceId, emailAddress);
      if (response.status === 200) {
        setMailSent(true);
      }
    });
  }

  return (
    <CenterPage>
      <FlexGrow />
      <Typography variant="h3" color="primary" className={classes.centerText}>
        {t("app:initiatePasswordResetPage.headline")}
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label={t("app:loginPage.emailPlaceholder")}
        name="email"
        autoComplete="email"
        autoFocus
        value={emailAddress}
        onChange={handleEmailAdressChange}
      />
      {mailSent
        ? <RoundedBox classNames={[classes.successMessage]}>
          {t("app:initiatePasswordResetPage.mailSentConfirmation")}
        </RoundedBox>
        : <RoundedButton onClick={onResetPasswordClicked} disabled={loading}>
          {t("app:initiatePasswordResetPage.resetPasswordButtonLabel")}
        </RoundedButton>}
      <FlexGrow />
    </CenterPage>
  );
};

export default InitiatePasswordReset;
