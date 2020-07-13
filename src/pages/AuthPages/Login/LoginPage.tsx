import React, { useRef, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';


import { makeStyles } from '@material-ui/core/styles';

import logo from '../../../assets/images/Influenzanet_Logo_RGB.png';
import Box from '@material-ui/core/Box';
import RoundedBox from '../../../components/ui/RoundedBox';
import FlexGrow from '../../../components/common/FlexGrow';
import { loginWithEmailRequest } from '../../../api/auth-api';
import { useSelector, useDispatch } from 'react-redux';
import { generalActions } from '../../../store/general/generalSlice';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';
import { setPreferredLanguageReq } from '../../../api/user-management-api';
import { resetAuth } from '../../../api/instances/auth-api-instance';
import Error from '../../../components/auth/Error/Error';
import { RootState } from '../../../store';
import { AuthPagesPaths } from '../../../routes';
import { usePostLogin } from '../../../hooks';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import VerificationCodeForm from './VerificationCodeForm';
import { LoginResponse } from '../../../types/auth-api';
import { useAsyncApiCall } from '../../../hooks/useAsyncApiCall';
import { useSetAuthState } from '../../../hooks/useSetAuthState';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
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

  remmemberText: {
    userSelect: "none",
  }
}));


const Login: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const setAuthState = useSetAuthState();
  const postLogin = usePostLogin();

  const history = useHistory();

  const [instanceId, persistState] = useSelector((state: RootState) => [state.general.instanceId, state.general.persistState]);
  const currentPreferredLanguage = useSelector((state: RootState) => state.user.currentUser.account.preferredLanguage);

  // credentials:
  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");

  let [showVerificationForm, setShowVerificationForm] = useState(false);

  let [errorMessages, setErrorMessages] = useState<string[]>([]);

  const [loginReqState, callLogin] = useAsyncApiCall(loginWithEmailRequest);

  const loading = loginReqState.loading;

  useEffect(() => {
    if (loginReqState.value) {
      console.log('login finished')
      const response = loginReqState.value.data as LoginResponse;
      if (response.secondFactorNeeded) {
        setShowVerificationForm(true);
      } else {

        /*
          if (currentPreferredLanguage !== "" && currentPreferredLanguage !== response.data.token.preferredLanguage) {
            // Let server know that user chose a different language on login.
            let userResponse = await setPreferredLanguageReq(currentPreferredLanguage);
            user = userResponse.data;
          }
        */
        setAuthState(response.token, response.user);
        postLogin();
      }


    } else if (loginReqState.error) {
      const e = loginReqState.error;
      console.error(e);
      if (e.response && e.response.data && e.response.data.error) {
        setErrorMessages([e.response.data.error]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginReqState.value, loginReqState.error]);


  const onLinkClicked = (name: string) => {
    switch (name) {
      case 'signup':
        history.push(AuthPagesPaths.Signup);
        break;
      default:
        console.warn(`undefined link name: ${name}`);
        break;
    }
  }

  const onLoginSubmit = (email: string, password: string, rememberMe: boolean) => {
    resetAuth();
    setEmailAddress(email);
    setPassword(password);
    dispatch(generalActions.setPersistState(rememberMe));

    callLogin({
      instanceId: instanceId,
      email: email,
      password: password
    });
  }

  const onVerificationCodeSubmit = (verificationCode: string) => {
    callLogin({
      instanceId: instanceId,
      email: emailAddress,
      password: password,
      verificationCode: verificationCode,
    });
  }

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
      {loading && <LinearProgress />}
      <LanguageSelector />
      <FlexGrow />
      <Box className={classes.logo} height="80px">
        <img src={logo} alt="logo" height="100%" />
      </Box>
      <RoundedBox classNames={[classes.formContainer]} >
        {
          !showVerificationForm ?
            <LoginForm
              onSubmit={onLoginSubmit}
              rememberMeDefault={persistState}
              onLinkClicked={onLinkClicked}
            /> :
            <VerificationCodeForm
              onSubmit={onVerificationCodeSubmit}
            />
        }
      </RoundedBox>
      {errorMessages.map(error =>
        <Error errorString={error} key={error} />
      )}
      <FlexGrow flexGrow={2} />
    </Container>
  );
}

export default Login;
