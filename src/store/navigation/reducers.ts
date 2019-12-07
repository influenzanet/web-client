import {
    NavigationState,
    NavigationActionTypes,
    OPEN_NAVIGATION_DRAWER,
    CLOSE_NAVIGATION_DRAWER,
    START_LOADING,
    FINISH_LOADING,
    SET_PAGE_TITLE,
} from './types';
import { updateObject } from '../utils';


const initialState: NavigationState = {
    drawerOpen: false,
    currentPageTitle: 'Influenzanet',
    loading: false,
}

export function navigationReducer(
    state = initialState,
    action: NavigationActionTypes
): NavigationState {
    switch (action.type) {
        case OPEN_NAVIGATION_DRAWER:
            return updateObject(state, { drawerOpen: true });
        case CLOSE_NAVIGATION_DRAWER:
            return updateObject(state, { drawerOpen: false });
        case SET_PAGE_TITLE:
            return updateObject(state, { currentPageTitle: action.title });
        case START_LOADING:
            return updateObject(state, { loading: true })
        case FINISH_LOADING:
            return updateObject(state, { loading: false })
        default:
            return state;
    }
}