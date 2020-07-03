import { SignupMsg, LoginMsg, TokenResponse, LoginResponse } from '../types/auth-api';
import authApiInstance from './instances/auth-api-instance';
import apiInstance from './instances/api-instance';

// Auth API
export const signupWithEmailRequest = (creds: SignupMsg) => apiInstance.post<TokenResponse>('/v1/auth/signup-with-email', creds);
export const loginWithEmailRequest = (creds: LoginMsg) => apiInstance.post<LoginResponse>('/v1/auth/login-with-email', creds);
export const switchProfileReq = (profileReq: { profileId: string, refreshToken: string }) => authApiInstance.post<TokenResponse>('/v1/auth/switch-profile', profileReq);

export const autoValidateTemporaryTokenReq = (token: string, accessToken: string) => apiInstance.post<LoginResponse>('/v1/auth/get-verification-code-with-token', { token, accessToken });
export const renewTokenURL = '/v1/auth/renew-token';
export const renewTokenReq = (refreshToken: string) => authApiInstance.post<TokenResponse>(renewTokenURL, { refreshToken: refreshToken });
