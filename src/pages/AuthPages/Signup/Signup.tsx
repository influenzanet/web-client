import React, { useRef, useEffect, Fragment, useState, ChangeEvent } from 'react';
import { LinkRef } from '../../../components/common/link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../assets/images/Influenzanet_Logo_RGB.png';
import Box from '@material-ui/core/Box';
import RoundedBox from '../../../components/ui/RoundedBox';
import FlexGrow from '../../../components/common/FlexGrow';
import { Tooltip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signupWithEmailRequest } from '../../../api/auth-api';
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants';

import { userActions } from '../../../store/user/userSlice';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';
import { setDefaultAccessTokenHeader, resetAuth } from '../../../api/instances/auth-api-instance';
import Error from '../../../components/auth/Error/Error';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../../store';
import { AuthPagesPaths } from '../../../routes';
import { usePostLogin } from '../../../hooks';


const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textContainer: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
  formContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  logo: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  checkBox: {
    width: "100%",
  }
}));


const Signup: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const postLogin = usePostLogin();
  const { t } = useTranslation(['app']);

  const instanceId = useSelector((state: RootState) => state.general.instanceId);

  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  let [wantsNewsletter, setWantsNewsletter] = useState(false);
  let [useTwoFactor, setUseTwoFactor] = useState(true);

  let [errorMessages, setErrorMessages] = useState<string[]>([]);

  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);

  const handleEmailAdressChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailAddress(event.target.value);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConfirmPassword(event.target.value);
  }

  const handleAcceptedPrivacyPolicyChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setAcceptedPrivacyPolicy(checked);
  }

  const handleReceiveNewsletterChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setWantsNewsletter(checked);
  }

  const handleUseTwoFactorChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setUseTwoFactor(checked);
  }

  const signupButtonEnabled = () => {
    return acceptedPrivacyPolicy && emailAddress.length > 0 && password.length > 0 && passwordsMatch();
  }

  const passwordsMatch = () => {
    return password === confirmPassword;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp();
  }

  const signUp = async () => {
    if (loading) return;
    resetAuth();
    try {
      setLoading(true);
      let response = await signupWithEmailRequest({
        email: emailAddress,
        password: password,
        instanceId: instanceId,
        preferredLanguage: "en",
        wantsNewsletter: wantsNewsletter,
        use2fa: useTwoFactor,
      });

      let tokenRefreshedAt = new Date().getTime();

      dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
      }));

      setDefaultAccessTokenHeader(response.data.accessToken);

      dispatch(userActions.setFromTokenResponse(response.data));

      setLoading(false);
      postLogin();
    } catch (e) {
      console.log(e.response);
      if (e.response && e.response.data && e.response.data.error) {
        setErrorMessages([e.response.data.error]);
      }
      setLoading(false);
    }
  };

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      <LanguageSelector />
      <FlexGrow />
      <Box className={classes.logo} height="80px">
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Typography variant="h3" color="primary">
        {t("app:signupPage.title")}
      </Typography>
      <RoundedBox classNames={[classes.textContainer]}>
        <Typography variant="body1" color="primary">
          {t("app:signupPage.message")}
        </Typography>
      </RoundedBox>
      <RoundedBox classNames={[classes.formContainer]} >
        <form className={classes.form} onSubmit={onSubmit} noValidate={true}>
          <Tooltip title={t("app:signupPage.emailHint") as string}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("app:signupPage.emailPlaceholder")}
              name="email"
              autoComplete="email"
              autoFocus
              value={emailAddress}
              onChange={handleEmailAdressChange}
            />
          </Tooltip>
          <Tooltip title={t("app:signupPage.passwordHint") as string}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("app:signupPage.passwordPlaceholder")}
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Tooltip>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label={t("app:signupPage.confirmPasswordPlaceholder")}
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <FormControlLabel
            control={<Checkbox checked={acceptedPrivacyPolicy} value={acceptedPrivacyPolicy} onChange={handleAcceptedPrivacyPolicyChange} color="primary" />}
            className={classes.checkBox}
            label={
              <Fragment><span>{t("app:signupPage.acceptPrivacyPolicyLabelBeforeLink")}</span> <Link variant="body1" component={LinkRef} to="/privacy">{t("app:signupPage.acceptPrivacyPolicyLink")}</Link><span>{t("app:signupPage.acceptPrivacyPolicyLabelAfterLink")}</span></Fragment>
            }
          />
          <Tooltip title={t("app:signupPage.newsletterHint") as string}>
            <FormControlLabel
              control={<Checkbox checked={wantsNewsletter} value={wantsNewsletter} onChange={handleReceiveNewsletterChange} color="primary" />}
              className={classes.checkBox}
              label={t("app:signupPage.receiveNewsletterLabel")}
            />
          </Tooltip>

          <Tooltip title={'Todo'}>
            <FormControlLabel
              control={<Checkbox checked={useTwoFactor} value={useTwoFactor} onChange={handleUseTwoFactorChange} color="primary" />}
              className={classes.checkBox}
              label={'Use Two Factor'}
            />
          </Tooltip>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // component={LinkRef} to="/home"
            className={classes.submit}
            disabled={!signupButtonEnabled()}
          // onClick={onSubmit}
          >
            {t("app:signupPage.signupButtonLabel")}
          </Button>
          <Link variant="body2" component={LinkRef} to={AuthPagesPaths.Login} align="center">
            {t("app:signupPage.loginLink")}
          </Link>
        </form>
      </RoundedBox>
      {errorMessages.map(error =>
        <Error errorString={error} key={error} />
      )}
      <FlexGrow flexGrow={2} />
    </Container>
  );
}

export default Signup;
