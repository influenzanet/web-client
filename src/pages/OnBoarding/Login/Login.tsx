import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { LinkRef } from '../../../components/common/link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../assets/images/Influenzanet_Logo_RGB.png';
import Box from '@material-ui/core/Box';
import RoundedBox from '../../../components/ui/RoundedBox';
import FlexGrow from '../../../components/common/FlexGrow';
import { loginWithEmailRequest } from '../../../api/auth-api';
import { useSelector, useDispatch } from 'react-redux';
import { GeneralState, generalActions } from '../../../store/general/generalSlice';
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants/constants';
import { useHistory } from 'react-router';
import { OnBoardingPaths } from '../OnBoarding';
import { HomePaths } from '../../Home/Home';
import { userActions, UserState } from '../../../store/user/userSlice';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { setPreferredLanguageReq } from '../../../api/user-management-api';
import { setDefaultAccessTokenHeader } from '../../../api/instances/authApiInstance';
import OnboardingError from '../Error/OnboardingError';


const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textContainer: {
    marginTop: theme.spacing(2),
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
  remmemberText: {
    userSelect: "none",
  }
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { t } = useTranslation(['app']);

  const history = useHistory();

  const [instanceId, persistState] = useSelector((state: { general: GeneralState }) => [state.general.instanceId, state.general.persistState]);
  const currentPreferredLanguage = useSelector((state: { user: UserState }) => state.user.currentUser.account.preferredLanguage);

  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");

  let [errorMessages, setErrorMessages] = useState<string[]>([]);

  let [loading, setLoading] = useState(false);

  const login = async () => {
    if (loading) return;
    try {
      setLoading(true);

      let response = await loginWithEmailRequest({
        email: emailAddress,
        password: password,
        instanceId: instanceId,
      });

      let tokenRefreshedAt = new Date().getTime();

      dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
      }));

      setDefaultAccessTokenHeader(response.data.accessToken);

      if (currentPreferredLanguage !== "" && currentPreferredLanguage !== response.data.preferredLanguage) {
        // Let server know that user chose a different language on login.
        let userResponse = await setPreferredLanguageReq(currentPreferredLanguage);
        userResponse.data.timestamps.lastTokenRefresh = tokenRefreshedAt;
        dispatch(userActions.setState({
          currentUser: userResponse.data,
          selectedProfileId: response.data.selectedProfileId,
        }));
      } else {
        dispatch(userActions.setOnNewToken({ tokenResponse: response.data, timestamp: tokenRefreshedAt }));
      }

      setLoading(false);
      history.push(HomePaths.Dashboard);
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data && e.response.data.error) {
        setErrorMessages([e.response.data.error]);
      }
      setLoading(false);
    }
  };

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

  const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(generalActions.setPersistState(checked));
  }

  const loginButtonEnabled = () => {
    return emailAddress.length > 0 && password.length > 0;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  }

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      <LanguageSelector />
      <FlexGrow />
      <Box className={classes.logo} height="80px">
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Typography variant="h3" color="primary">
        {t("app:loginPage.title")}
      </Typography>
      <RoundedBox classNames={[classes.textContainer]}>
        <Typography variant="body1" color="primary">
          {t("app:loginPage.message")}
        </Typography>
      </RoundedBox>
      <RoundedBox classNames={[classes.formContainer]} >
        <form className={classes.form} onSubmit={onSubmit} noValidate>
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("app:loginPage.passwordPlaceholder")}
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
          />
          <FormControlLabel
            control={<Checkbox checked={persistState} value={persistState} onChange={handleRememberMeChange} color="primary" />}
            className={classes.remmemberText}
            label={t("app:loginPage.rememberMeLabel")}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // component={LinkRef} to="/home"
            className={classes.submit}
            disabled={!loginButtonEnabled()}
          >
            {t("app:loginPage.loginButtonLabel")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("app:loginPage.forgotPasswordLink")}
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" component={LinkRef} to={OnBoardingPaths.Signup}>
                {t("app:loginPage.signupLink")}
              </Link>
            </Grid>
          </Grid>
        </form>
      </RoundedBox>
      {errorMessages.map(error =>
        <OnboardingError errorString={error} key={error} />
      )}
      <FlexGrow flexGrow={2} />
    </Container>
  );
}

export default Login;
