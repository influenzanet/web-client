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
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants';
import { userActions } from '../../../store/user/userSlice';
import LanguageSelector from '../../../components/language/LanguageSelector/LanguageSelector';
import { setPreferredLanguageReq } from '../../../api/user-management-api';
import { setDefaultAccessTokenHeader, resetAuth } from '../../../api/instances/auth-api-instance';
import Error from '../../../components/auth/Error/Error';
import { RootState } from '../../../store';
import { AuthPagesPaths } from '../../../routes';
import { usePostLogin } from '../../../hooks';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';
import VerificationCodeForm from './VerificationCodeForm';
import { LoginMsg } from '../../../types/auth-api';

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
  const postLogin = usePostLogin();

  const history = useHistory();

  const [instanceId, persistState] = useSelector((state: RootState) => [state.general.instanceId, state.general.persistState]);
  const currentPreferredLanguage = useSelector((state: RootState) => state.user.currentUser.account.preferredLanguage);

  // credentials:
  let [emailAddress, setEmailAddress] = useState("");
  let [password, setPassword] = useState("");

  let [showVerificationForm, setShowVerificationForm] = useState(false);

  let [errorMessages, setErrorMessages] = useState<string[]>([]);

  let [loading, setLoading] = useState(false);

  const login = async (credentials: LoginMsg) => {
    if (loading) return;
    resetAuth();
    try {
      setLoading(true);

      const response = await loginWithEmailRequest(credentials);

      if (response.data.secondFactorNeeded) {
        setShowVerificationForm(true);
      } else {
        let tokenRefreshedAt = new Date().getTime();

        dispatch(apiActions.setState({
          accessToken: response.data.token.accessToken,
          refreshToken: response.data.token.refreshToken,
          expiresAt: tokenRefreshedAt + response.data.token.expiresIn * minuteToMillisecondFactor,
        }));

        setDefaultAccessTokenHeader(response.data.token.accessToken);

        let user = response.data.user;

        if (currentPreferredLanguage !== "" && currentPreferredLanguage !== response.data.token.preferredLanguage) {
          // Let server know that user chose a different language on login.
          let userResponse = await setPreferredLanguageReq(currentPreferredLanguage);
          user = userResponse.data;
        }

        dispatch(userActions.setState({
          currentUser: user,
          selectedProfileId: response.data.token.selectedProfileId
        }));
        dispatch(userActions.setUserID(emailAddress));

        postLogin();
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data && e.response.data.error) {
        setErrorMessages([e.response.data.error]);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = `calc(100vh - ${containerRef.current.offsetTop}px)`;
    }
  }, []);


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
    setEmailAddress(email);
    setPassword(password);

    dispatch(generalActions.setPersistState(rememberMe));
    login({
      instanceId: instanceId,
      email: email,
      password: password
    });
  }

  const onVerificationCodeSubmit = (verificationCode: string) => {
    login({
      instanceId: instanceId,
      email: emailAddress,
      password: password,
      verificationCode: verificationCode,
    });
  }

  return (
    <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
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
