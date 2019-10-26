import {
    OPEN_NAVIGATION_DRAWER,
    CLOSE_NAVIGATION_DRAWER
} from '../actions/actionTypes';
import { NavigationActionTypes } from '../actions/navigation';

export interface NavigationState {
    drawerOpen: boolean;
}

const initialState: NavigationState = {
    drawerOpen: true,
}

export function navigationReducer(
    state = initialState,
    action: NavigationActionTypes
): NavigationState {
    console.log('reducer');
    switch (action.type) {
        case OPEN_NAVIGATION_DRAWER:
            return {
                ...state,
                drawerOpen: true
              };
        case CLOSE_NAVIGATION_DRAWER:
            return {
                ...state,
                drawerOpen: false
              };;

        default:
            return state
    }
}