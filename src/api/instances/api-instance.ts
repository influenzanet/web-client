import axios from 'axios';

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

apiInstance.defaults.headers.Authorization = "Bearer ";

export default apiInstance;
