import axios from 'axios';

const api = axios.create({
  // baseURL: `http://localhost:3231`
  baseURL: process.env.REACT_APP_API_BASE_URL
});
export default api;


export const setAccessTokenHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = "Bearer " + token;
};

// TODO: add interceptor for token renew
