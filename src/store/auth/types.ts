// State:
export interface AuthState {
  isAuth: boolean;
  loading: boolean;
}

// Action Types:
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

interface LoginStartAction {
  type: typeof LOGIN_START
}
interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
}

interface LoginFailedAction {
  type: typeof LOGIN_FAILED
}

interface LogoutAction {
  type: typeof LOGOUT
}


export type AuthActionTypes =
  LoginStartAction |
  LoginSuccessAction |
  LoginFailedAction |
  LogoutAction
