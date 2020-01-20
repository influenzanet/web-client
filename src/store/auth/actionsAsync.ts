import { UserCredentials } from "../../api/models/auth-api";
import { AppThunk } from "../utils";
import { loginStart, loginSuccess, loginFailed } from "./actions";
import API, { loginWithEmailRequest, signupWithEmailRequest } from '../../api/api';

export function login(
  credentials: UserCredentials,
  rememberMe?: boolean
): AppThunk<void> {
  return async dispatch => {
    dispatch(loginStart());
    try {
      // Alter defaults after instance has been created
      const response = await loginWithEmailRequest(credentials);
      const tokenInfos = response.data;
      console.log(tokenInfos);
      /*
      localStorage.setItem('orgID', credentials.instanceId);
      localStorage.setItem('username', credentials.username);

      applyNewToken(tokenInfos, rememberMe);

      setTimeout(() => {
        dispatch(renewToken(credentials.instanceId, tokenInfos.refreshToken, rememberMe));
      }, (tokenInfos.expiresIn * 0.9) * 1000);
*/
      return dispatch(loginSuccess(
        // credentials.instanceId,
        // credentials.username
      ));

    } catch (error) {
      console.error(error.response);
      dispatch(loginFailed());
      /*

      return dispatch(setError('Anmeldung fehlgeschlagen. Bitte Eingaben überprüfen.'))
      */
    }
  };
}

export function signup(
  credentials: UserCredentials,
  rememberMe?: boolean
): AppThunk<void> {
  return async dispatch => {
    dispatch(loginStart());
    try {
      // Alter defaults after instance has been created
      const response = await signupWithEmailRequest(credentials);
      const tokenInfos = response.data;
      console.log(tokenInfos);
      /*
      localStorage.setItem('orgID', credentials.instanceId);
      localStorage.setItem('username', credentials.username);

      applyNewToken(tokenInfos, rememberMe);

      setTimeout(() => {
        dispatch(renewToken(credentials.instanceId, tokenInfos.refreshToken, rememberMe));
      }, (tokenInfos.expiresIn * 0.9) * 1000);
*/
      return dispatch(loginSuccess(
        // credentials.instanceId,
        // credentials.username
      ));

    } catch (error) {
      console.error(error.response);
      dispatch(loginFailed());
      /*

      return dispatch(setError('Anmeldung fehlgeschlagen. Bitte Eingaben überprüfen.'))
      */
    }
  };
}
