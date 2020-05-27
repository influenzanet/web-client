import axios from 'axios';
import store from "../../store";
import { renewTokenReq } from '../auth-api';
import { apiActions } from '../../store/api/apiSlice';

const minuteFactor = 60000;
const renewThreshold = 1 * minuteFactor;

const authApiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const renewToken = async () => {
  let expiresAt = store.getState().api.expiresAt;
  let refreshToken = store.getState().api.refreshToken;

  if (refreshToken.length > 0 && expiresAt < new Date().getTime() + renewThreshold) {
    let response = await renewTokenReq(refreshToken);

    store.dispatch(apiActions.setState({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      expiresAt: new Date().getTime() + response.data.expiresIn * minuteFactor,
    }));
    setDefaultAccessTokenHeader(response.data.accessToken);

    return response.data.accessToken;
  } else {
    return null;
  }
}

authApiInstance.interceptors.request.use(
  async (config) => {
    let newAccessToken = await renewToken();
    if (newAccessToken) {
      config.headers.Authorization = "Bearer " + newAccessToken;
    }
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export const setDefaultAccessTokenHeader = (token: string) => {
  authApiInstance.defaults.headers.Authorization = "Bearer " + token;
};

export default authApiInstance;
