import axios from 'axios';
import store, { resetStore } from "../../store";
import { renewTokenReq, renewTokenURL } from '../auth-api';
import { apiActions } from '../../store/api/apiSlice';
import { minuteToMillisecondFactor } from '../../constants';

const renewThreshold = 1 * minuteToMillisecondFactor;

const authApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const renewToken = async () => {
  let expiresAt = store.getState().api.expiresAt;
  let refreshToken = store.getState().api.refreshToken;

  if (refreshToken && refreshToken.length > 0) {
    if (expiresAt < new Date().getTime() + renewThreshold) {
      let response = await renewTokenReq(refreshToken);

      store.dispatch(apiActions.setState({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        expiresAt: new Date().getTime() + response.data.expiresIn * minuteToMillisecondFactor,
      }));
      setDefaultAccessTokenHeader(response.data.accessToken);
      return response.data.accessToken;
    }
  } else if (expiresAt < new Date().getTime()) {
    throw new Error('no valid tokens');
  }
  return null;
}





authApiInstance.interceptors.request.use(
  async (config) => {
    if (renewTokenURL === config.url) {
      return config;
    }
    try {
      let newAccessToken = await renewToken();
      if (newAccessToken) {
        config.headers.Authorization = "Bearer " + newAccessToken;
      }
    } catch (e) {
      resetAuth();
      if (e.response) {
        console.error(e.response);
      } else {
        console.error(e);
      }

    }

    return config;
  },
  (error) => {
    resetAuth();
    console.error(error);
    return Promise.reject(error);
  }
);

export const setDefaultAccessTokenHeader = (token: string) => {
  authApiInstance.defaults.headers.Authorization = "Bearer " + token;
};

export const resetAuth = () => {
  resetStore();
  setDefaultAccessTokenHeader('');
}

export default authApiInstance;
