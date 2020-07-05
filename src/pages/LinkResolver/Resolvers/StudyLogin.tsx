import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '../../../hooks/useQuery';
import { useMountEffect, usePostLogin } from '../../../hooks';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes, HomePaths } from '../../../routes';
import { autoValidateTemporaryTokenReq, loginWithEmailRequest } from '../../../api/auth-api';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { resetAuth } from '../../../api/instances/auth-api-instance';
import Error from '../../../components/auth/Error/Error';

import { Button, TextField, Box, Typography, Container, makeStyles, Paper, LinearProgress } from '@material-ui/core';
import { useAsyncApiCall } from '../../../hooks/useAsyncApiCall';
import { useSetAuthState } from '../../../hooks/useSetAuthState';
import { LoginResponse } from '../../../types/auth-api';

const useStyles = makeStyles(theme => ({
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
}));

const StudyLogin: React.FC = () => {
  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  const query = useQuery();
  const token = query.get("token");
  const studyKey = query.get("study");
  const instanceId = useSelector((state: RootState) => state.general.instanceId);
  const accessToken = useSelector((state: RootState) => state.api.accessToken);
  const setAuthState = useSetAuthState();
  const postLogin = usePostLogin();

  const [loading, setLoading] = useState(false);
  let [errorMessages, setErrorMessages] = useState<string[]>([]);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    verificationCode: '',
  })

  const { t } = useTranslation(['app']);
  const history = useHistory();




  const validateToken = async (token: string) => {
    setLoading(true);
    try {
      const response = await autoValidateTemporaryTokenReq(token, accessToken)
      if (!response.data || !response.data.accountId || !response.data.verificationCode) {
        console.error('unexpected response');
        console.log(response);
        history.replace(AppRoutes.Home);
        return;
      }

      if (!response.data.isSameUser) {
        resetAuth();
      }

      setCredentials({
        email: response.data.accountId,
        password: '',
        verificationCode: response.data.verificationCode,
      })
    } catch (err) {
      console.error(err);
      console.error(err.response.data.error);
      history.replace(AppRoutes.Home);
      return;
    } finally {
      setLoading(false);
    }
  }

  const [loginReqState, callLogin] = useAsyncApiCall(loginWithEmailRequest);

  useEffect(() => {
    if (loginReqState.value) {
      console.log('login finished')
      const response = loginReqState.value.data as LoginResponse;

      setAuthState(response.token, response.user);
      postLogin();

    } else if (loginReqState.error) {
      const e = loginReqState.error;
      console.error(e);
      if (e.response && e.response.data && e.response.data.error) {
        setErrorMessages([e.response.data.error]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginReqState.value, loginReqState.error]);



  /*
    if (currentPreferredLanguage !== "" && currentPreferredLanguage !== response.data.token.preferredLanguage) {
      // Let server know that user chose a different language on login.
      let userResponse = await setPreferredLanguageReq(currentPreferredLanguage);
      user = userResponse.data;
    }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data && e.response.data.error) {
        // setErrorMessages([e.response.data.error]);
      }
    } finally {
      setLoading(false);
    }
  };*/

  // Use Effects:
  useMountEffect(() => {
    console.log(token);
    console.log(studyKey);

    if (!token || token.length < 1) {
      history.replace(AppRoutes.Home);
      return;
    }
    validateToken(token);
  });

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setCredentials(prev => {
      return {
        ...prev,
        password: value
      }
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetAuth();
    callLogin({ ...credentials, instanceId });
  }

  return (
    <React.Fragment>
      {(loading || loginReqState.loading) && <LinearProgress />}

      <Container ref={containerRef} className={classes.pageContainer} maxWidth="xs" >
        <Box p={2}></Box>
        <Paper>
          <Box p={2}>

            <Typography variant="h5" color="primary">
              {'Confirm your password to continue'}
            </Typography>

            <Typography variant="body1" color="primary">
              {credentials.email}
            </Typography>
            <form onSubmit={onSubmit} noValidate>
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
                value={credentials.password}
                onChange={handlePasswordChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              // className={classes.submit}
              // disabled={!loginButtonEnabled()}
              >
                {t("app:loginPage.loginButtonLabel")}
              </Button>

            </form>
          </Box>
        </Paper>
        {errorMessages.map(error =>
          <Error errorString={error} key={error} />
        )}
      </Container>
    </React.Fragment>
  );
};

export default StudyLogin;
