import React, { useState, Fragment, ChangeEvent } from 'react';
import { useQuery, useMountEffect, useAsyncCall, useStyles } from '../../../hooks';
import { getInfosForPasswordResetReq, resetPasswordReq } from '../../../api/user-management-api';
import LoadingDialog from '../../../components/ui/dialogs/LoadingDialog';
import CenterPage from '../../../components/ui/pages/CenterPage';
import FlexGrow from '../../../components/common/FlexGrow';
import { Typography, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import RoundedBox from '../../../components/ui/RoundedBox';
import RoundedButton from '../../../components/ui/buttons/RoundedButton';
import Error from '../../../components/auth/Error/Error';
import { useHistory } from 'react-router';
import { AuthPagesPaths } from '../../../routes';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';

const PasswordReset: React.FC = () => {
  const classes = useStyles(theme => ({
    successMessage: {
      color: theme.palette.success.main,
    },
    loginButton: {
      margin: theme.spacing(2),
      fontSize: 16,
    }
  }));

  const query = useQuery();
  const token = query.get("token");

  const { t } = useTranslation(['app']);
  const history = useHistory();

  const [loading, asyncCall] = useAsyncCall();

  const [validToken, setValidToken] = useState(false);
  const [accountId, setAccountId] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  useMountEffect(() => {
    if (token) {
      asyncCall(async () => {
        const response = await getInfosForPasswordResetReq(token);
        console.log(response);
        const accountId = response.data.accountId;
        if (accountId) {
          setValidToken(true);
          setAccountId(accountId);
        }
      });
    }
  });

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(event.target.value);
  }

  const onChangePasswordClicked = () => {
    if (!token) return;
    setErrorMessage(undefined);
    console.log(password);
    asyncCall(async () => {
      const response = await resetPasswordReq(token, password);
      console.log(response);
      if (response.status === 200) {
        setPasswordChanged(true);
      }
    },
      (e) => {
        if (e.response && e.response.data && e.response.data.error) {
          setErrorMessage(e.response.data.error);
        }
      }
    );
  }

  const changePasswordPage = () => {
    return (
      <Fragment>
        <Typography variant="h3" color="primary" align="center">
          {t("app:passwordResetPage.headline")}
        </Typography>
        <form noValidate={true} onSubmit={() => null}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            autoComplete="email"
            value={accountId}
            disabled={true}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={t("app:passwordResetPage.newPasswordPlaceholder")}
            type="password"
            autoComplete="new-password"
            autoFocus
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={t("app:passwordResetPage.confirmNewPasswordPlaceholder")}
            type="password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </form>
        {
          passwordChanged
            ? <Fragment>
              <RoundedBox>
                <Typography className={classes.successMessage} >
                  {t("app:passwordResetPage.passwordChangedConfirmation")}
                </Typography>
              </RoundedBox>
              <RoundedButton color="primary" onClick={() => history.push(AuthPagesPaths.Login)} className={classes.loginButton}>
                {t("app:passwordResetPage.loginButtonLabel")}
              </RoundedButton>
            </Fragment>
            : <RoundedButton color="primary" onClick={onChangePasswordClicked} disabled={loading}>
              {t("app:passwordResetPage.changePasswordButtonLabel")}
            </RoundedButton>
        }
        {errorMessage
          ? <Error errorString={errorMessage} />
          : null
        }
      </Fragment>
    );
  }

  const invalidTokenPage = () => {
    return (
      <Typography variant="h5" color="primary" align="center">
        {t("app:passwordResetPage.invalidTokenMessage")}
      </Typography>
    );
  }

  return (
    <CenterPage>
      <LanguageSelector />
      <FlexGrow />
      {(validToken)
        ? changePasswordPage()
        : invalidTokenPage()
      }
      <FlexGrow />
      <LoadingDialog open={loading} />
    </CenterPage>
  );
};

export default PasswordReset;
