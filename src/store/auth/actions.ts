import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  AuthActionTypes
} from "./types";
import { AppThunk } from "../utils";

export function loginStart(): AuthActionTypes {
  console.log('login start called')
  return {
    type: LOGIN_START,
  }
}

export function loginStartAsync(): AppThunk<void> {
  return async dispatch => {
    dispatch(loginStart());
    const res = await new Promise(
      resolve => {
        setTimeout(() => {
          resolve('test');
        }, 3000)
      }
    )
    console.log(res);
    return dispatch(loginSuccess());
  };
}

export function loginSuccess(): AuthActionTypes {
  console.log('login success called')
  return {
    type: LOGIN_SUCCESS,
  }
}

export function loginFailed(): AuthActionTypes {
  return {
    type: LOGIN_FAILED,
  }
}


export function logout(): AuthActionTypes {
  //TODO: remove token
  return {
    type: LOGOUT
  };
}
