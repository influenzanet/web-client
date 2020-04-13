import axios from 'axios';
import { UserCredentials, TokenResponse } from './models/auth-api';
import { Survey } from 'survey-engine/lib/data_types';

const api = axios.create({
  // baseURL: `http://localhost:3231`
  baseURL: process.env.REACT_APP_API_BASE_URL
});
export default api;

// Auth API
export const signupWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/signupWithEmail', creds);
export const loginWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/loginWithEmail', creds);


export const getAssignedSurveyRequest = (payload: UserCredentials) => api.post('/v1/study-system/study/', payload);
