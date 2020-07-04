import React, { useState, useEffect } from 'react';
import { useQuery } from '../../../hooks/useQuery';
import { useMountEffect, usePostLogin } from '../../../hooks';
import { useHistory, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppRoutes, HomePaths } from '../../../routes';
import { autoValidateTemporaryTokenReq, loginWithEmailRequest } from '../../../api/auth-api';
import { RootState } from '../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuth, setDefaultAccessTokenHeader } from '../../../api/instances/auth-api-instance';
import { LoginMsg } from '../../../types/auth-api';
import { apiActions } from '../../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../../constants';
import { userActions } from '../../../store/user/userSlice';
import { Button, TextField, Box, Typography } from '@material-ui/core';

const StudyLogin: React.FC = () => {
  const query = useQuery();
  const token = query.get("token");
  const studyKey = query.get("study");
  const instanceId = useSelector((state: RootState) => state.general.instanceId);
  const accessToken = useSelector((state: RootState) => state.api.accessToken);

  const [loading, setLoading] = useState(false);
  const [performLogin, setPerformLogin] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    verificationCode: '',
  })

  const { t } = useTranslation(['app']);
  const history = useHistory();
  const dispatch = useDispatch();
  const postLogin = usePostLogin();

  const [loginSuccess, setLoginSuccess] = useState(false);

  console.log(token);
  console.log(studyKey);

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

  const login = async (credentials: LoginMsg) => {
    if (loading) return;
    resetAuth();
    try {
      setLoading(true);
      const response = await loginWithEmailRequest(credentials);

      let tokenRefreshedAt = new Date().getTime();

      dispatch(apiActions.setState({
        accessToken: response.data.token.accessToken,
        refreshToken: response.data.token.refreshToken,
        expiresAt: tokenRefreshedAt + response.data.token.expiresIn * minuteToMillisecondFactor,
      }));

      setDefaultAccessTokenHeader(response.data.token.accessToken);

      let user = response.data.user;

      /*
      if (currentPreferredLanguage !== "" && currentPreferredLanguage !== response.data.token.preferredLanguage) {
        // Let server know that user chose a different language on login.
        let userResponse = await setPreferredLanguageReq(currentPreferredLanguage);
        user = userResponse.data;
      }*/

      dispatch(userActions.setState({
        currentUser: user,
        selectedProfileId: response.data.token.selectedProfileId
      }));
      dispatch(userActions.setUserID(credentials.email));
      setLoginSuccess(true);
      postLogin();
    } catch (e) {
      console.log(e);
      if (e.response && e.response.data && e.response.data.error) {
        // setErrorMessages([e.response.data.error]);
      }
    } finally {
      setLoading(false);
    }
  };

  // Use Effects:
  useMountEffect(() => {
    if (!token || token.length < 1) {
      history.replace(AppRoutes.Home);
      return;
    }
    validateToken(token);
  });

  useEffect(() => {
    if (performLogin) {
      login({ ...credentials, instanceId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [performLogin]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    setCredentials(prev => {
      return {
        ...prev,
        password: value
      }
    });
  }

  return (
    <React.Fragment>
      {loading && <p>Loading ... </p>}

      <Box>
        <Typography variant="h5" color="primary">
          {t("app:loginPage.title")}
        </Typography>

        <Typography variant="body1" color="primary">
          {t("app:loginPage.message")}
        </Typography>


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
          onClick={() => { setPerformLogin(true) }}
          fullWidth
          variant="contained"
          color="primary"
        // className={classes.submit}
        // disabled={!loginButtonEnabled()}
        >
          {t("app:loginPage.loginButtonLabel")}
        </Button>


      </Box>

    </React.Fragment>
  );
};

export default StudyLogin;
