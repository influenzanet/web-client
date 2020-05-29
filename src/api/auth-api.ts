import { SignupMsg, LoginMsg, TokenResponse } from '../types/auth-api';
import authApiInstance from './instances/auth-api-instance';
import apiInstance from './instances/api-instance';

// Auth API
export const signupWithEmailRequest = (creds: SignupMsg) => apiInstance.post<TokenResponse>('/v1/auth/signup-with-email', creds);
export const loginWithEmailRequest = (creds: LoginMsg) => apiInstance.post<TokenResponse>('/v1/auth/login-with-email', creds);
export const loginWithTemporaryTokenReq = (token: string) => apiInstance.post<TokenResponse>('/v1/auth/login-with-email', { token });
export const switchProfileReq = (profileReq: { profileId: string, refreshToken: string }) => authApiInstance.post<TokenResponse>('/v1/auth/switch-profile', profileReq);
export const renewTokenReq = (refreshToken: string) => apiInstance.post<TokenResponse>('/v1/auth/renew-token', { refreshToken: refreshToken });
