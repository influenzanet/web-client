import { SignupMsg, LoginMsg, TokenResponse } from '../types/auth-api';
import api from './api';

// Auth API
export const signupWithEmailRequest = (creds: SignupMsg) => api.post<TokenResponse>('/v1/auth/signup-with-email', creds);
export const loginWithEmailRequest = (creds: LoginMsg) => api.post<TokenResponse>('/v1/auth/login-with-email', creds);
export const loginWithTemporaryTokenReq = (token: string) => api.post<TokenResponse>('/v1/auth/login-with-email', { token });
export const switchProfileReq = (profileReq: { profileId: string, refreshToken: string }) => api.post<TokenResponse>('/v1/auth/switch-profile', profileReq);
export const renewTokenReq = (refreshToken: string) => api.post<TokenResponse>('/v1/auth/renew-token', { refreshToken: refreshToken });
