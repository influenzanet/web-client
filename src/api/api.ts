import axios from 'axios';
import { SignupMsg, LoginMsg, TokenResponse } from './types/auth-api';
import { SurveyReferenceReq, SurveyResponseReq, SurveyAndContextMsg } from './types/study-api';
import { ServiceStatus } from './types/general';
import { PasswordResetInfos } from './types/user-management-api';

const api = axios.create({
  // baseURL: `http://localhost:3231`
  baseURL: process.env.REACT_APP_API_BASE_URL
});
export default api;


export const setAccessTokenHeader = (token: string) => {
  api.defaults.headers.common['Authorization'] = "Bearer " + token;
};

// Auth API
export const signupWithEmailRequest = (creds: SignupMsg) => api.post<TokenResponse>('/v1/auth/signup-with-email', creds);
export const loginWithEmailRequest = (creds: LoginMsg) => api.post<TokenResponse>('/v1/auth/login-with-email', creds);
export const loginWithTemporaryTokenReq = (token: string) => api.post<TokenResponse>('/v1/auth/login-with-email', { token });
export const switchProfileReq = (profileReq: { profileId: string, refreshToken: string }) => api.post<TokenResponse>('/v1/auth/switch-profile', profileReq);
export const renewTokenReq = (refreshToken: string) => api.post<TokenResponse>('/v1/auth/renew-token', { refreshToken: refreshToken });

// Password Reset API
export const initiatePasswordResetReq = (instanceID: string, accountID: string) => api.post<ServiceStatus>('/v1/user/password-reset/initiate', { instanceID, accountID });
export const getInfosForPasswordResetReq = (token: string) => api.post<PasswordResetInfos>('/v1/user/password-reset/get-infos', { token });
export const resetPasswordReq = (token: string, newPassword: string) => api.post<ServiceStatus>('/v1/user/password-reset/reset-with', { token, newPassword });

// User management API
// TODO:

// Study API
export const getAssignedSurveyRequest = (payload: SurveyReferenceReq) => api.post<SurveyAndContextMsg>('/v1/studies/study/get-assigned-survey', payload);
export const submitSurveyResponseRequest = (payload: SurveyResponseReq) => api.post('/v1/studies/study/submit-response', payload);
