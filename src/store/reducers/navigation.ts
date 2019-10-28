import {
    OPEN_NAVIGATION_DRAWER,
    CLOSE_NAVIGATION_DRAWER,
    SET_PAGE_TITLE
} from '../actions/actionTypes';
import { NavigationActionTypes } from '../actions/navigation';

export interface NavigationState {
    drawerOpen: boolean;
    currentPageTitle: string;
}

const initialState: NavigationState = {
    drawerOpen: false,
    currentPageTitle: 'Influenzanet',
}

export function navigationReducer(
    state = initialState,
    action: NavigationActionTypes
): NavigationState {
    switch (action.type) {
        case OPEN_NAVIGATION_DRAWER:
            console.log('open drawer');
            return {
                ...state,
                drawerOpen: true
              };
        case CLOSE_NAVIGATION_DRAWER:
            console.log('close drawer');
            return {
                ...state,
                drawerOpen: false
              };;
        case SET_PAGE_TITLE:
            return {
                ...state,
                currentPageTitle: action.title
              };;

        default:
            return state
    }
}