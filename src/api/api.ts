import axios from 'axios';
import { UserCredentials, TokenResponse } from './models/auth-api';
import { SurveyReferenceReq, SurveyResponseReq, SurveyAndContextMsg } from './models/study-api';

const api = axios.create({
  // baseURL: `http://localhost:3231`
  baseURL: process.env.REACT_APP_API_BASE_URL
});
export default api;


export const setAccessTokenHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = "Bearer " + token;
};

// Auth API
export const signupWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/signupWithEmail', creds);
export const loginWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/loginWithEmail', creds);

// Study API
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => api.post<SurveyAndContextMsg>('/v1/study-system/study/get-assigned-survey', payload);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => api.post('/v1/study-system/study/submit-response', payload);
