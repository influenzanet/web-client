import React, { useRef, useEffect, Fragment, useState, ChangeEvent } from 'react';
import { LinkRef } from '../../../components/common/link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import logo from '../../../assets/images/Influenzanet_Logo_RGB.png';
import Box from '@material-ui/core/Box';
import RoundedBox from '../../../components/ui/RoundedBox';
import FlexGrow from '../../../components/common/FlexGrow';
import { Tooltip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signupWithEmailRequest } from '../../../api/auth-api';
import { GeneralState } from '../../../store/general/generalSlice';
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants/constants';
import { useHistory } from 'react-router';
import { OnBoardingPaths } from '../OnBoarding';
import { HomePaths } from '../../Home/Home';
import { userActions } from '../../../store/user/userSlice';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';
import { setDefaultAccessTokenHeader } from '../../../api/instances/authApiInstance';

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
  errorContainer: {
    marginBottom: theme.spacing(1),
  },
  errorText: {
    color: "white",
  },
  checkBox: {
    width: "100%",
  }
}));

const Signup: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const dispatch = useDispatch();

  const history = useHistory();

  const instanceId = useSelector((state: { general: GeneralState }) => state.general.instanceId);

  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
  let [wantsNewsletter, setWantsNewsletter] = useState(false);

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
    try {
      setLoading(true);
      let response = await signupWithEmailRequest({
        email: emailAddress,
        password: password,
        instanceId: instanceId,
        preferredLanguage: "en",
        wantsNewsletter: wantsNewsletter,
      });

      let tokenRefreshedAt = new Date().getTime();

      dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.expiresIn * minuteToMillisecondFactor,
      }));

      setDefaultAccessTokenHeader(response.data.accessToken);

      dispatch(userActions.setOnNewToken({ tokenResponse: response.data, timestamp: tokenRefreshedAt }));

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

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      <LanguageSelector />
      <FlexGrow />
      <Box className={classes.logo} height="80px">
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <Typography variant="h3" color="primary">
        Sign Up
      </Typography>
      <RoundedBox classNames={[classes.textContainer]}>
        <Typography variant="body1" color="primary">
          Register now to support the global fight against the novel coronavirus and influenza-like-illnesses!
        </Typography>
      </RoundedBox>
      <RoundedBox classNames={[classes.formContainer]} >
        <form className={classes.form} onSubmit={onSubmit} noValidate={true}>
          <Tooltip title="We need this so we can identify you.">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailAddress}
              onChange={handleEmailAdressChange}
            />
          </Tooltip>
          <Tooltip title="Don't make it too long!">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
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
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <FormControlLabel
            control={<Checkbox value={acceptedPrivacyPolicy} onChange={handleAcceptedPrivacyPolicyChange} color="primary" />}
            className={classes.checkBox}
            label={
              <Fragment><span>I have read and accept the </span> <Link variant="body1" component={LinkRef} to="/privacy">privacy statement</Link><span>.*</span></Fragment>
            }
          />
          <Tooltip title="If you want to, we will remind you via E-Mail when new surveys are available in your subscribed studies. We will also send you updates about the project every few weeks.">
            <FormControlLabel
              control={<Checkbox value={wantsNewsletter} onChange={handleReceiveNewsletterChange} color="primary" />}
              className={classes.checkBox}
              label="I want to receive the newsletter and survey reminders."
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
            Sign Up
                    </Button>
          <Link variant="body2" component={LinkRef} to={OnBoardingPaths.Login} align="center">
            {"Already have an account? Sign in."}
          </Link>
        </form>
      </RoundedBox>
      {errorMessages.map(error =>
        <RoundedBox classNames={[classes.errorContainer]} color={theme.palette.error.main} key={error}>
          <Typography variant="body1" color="inherit" className={classes.errorText}>
            {error}
          </Typography>
        </RoundedBox>
      )}
      <FlexGrow flexGrow={2} />
    </Container>
  );
}

export default Signup;
