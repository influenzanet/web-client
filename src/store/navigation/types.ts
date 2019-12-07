// State:
export interface NavigationState {
    drawerOpen: boolean;
    currentPageTitle: string;
    loading: boolean;
}

// Action Types:
export const OPEN_NAVIGATION_DRAWER = 'OPEN_NAVIGATION_DRAWER';
export const CLOSE_NAVIGATION_DRAWER = 'CLOSE_NAVIGATION_DRAWER';
export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

interface OpenNavigationDrawerAction {
    type: typeof OPEN_NAVIGATION_DRAWER
}
interface CloseNavigationDrawerAction {
    type: typeof CLOSE_NAVIGATION_DRAWER
}

interface StartLoadingAction {
    type: typeof START_LOADING
}

interface FinishLoadingAction {
    type: typeof FINISH_LOADING
}

interface SetPageTitleAction {
    type: typeof SET_PAGE_TITLE;
    title: string;
}


export type NavigationActionTypes =
    OpenNavigationDrawerAction |
    CloseNavigationDrawerAction |
    StartLoadingAction |
    FinishLoadingAction |
    SetPageTitleAction
    ;
