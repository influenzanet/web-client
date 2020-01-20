import axios from 'axios';
import { UserCredentials, TokenResponse } from './models/auth-api';

const api = axios.create({
  baseURL: `http://localhost:3231`
});
export default api;

// Auth API
export const signupWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/signupWithEmail', creds);
export const loginWithEmailRequest = (creds: UserCredentials) => api.post<TokenResponse>('/v1/auth/loginWithEmail', creds);
