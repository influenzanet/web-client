import {
    AuthState,
    AuthActionTypes,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
} from './types'
import { updateObject } from '../utils'


const initialState: AuthState = {
    isAuth: false,
    loading: false,
}

export function authReducer(
    state = initialState,
    action: AuthActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_START:
            return updateObject(state, { loading: true })
        case LOGIN_SUCCESS:
            return updateObject(state, { isAuth: true, loading: false })
        case LOGIN_FAILED:
            return updateObject(state, { isAuth: false, loading: false })
        case LOGOUT:
            return updateObject(state, { isAuth: false })
        default:
            return state
    }
}