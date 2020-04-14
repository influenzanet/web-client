// State:
export interface NavigationState {
  appBar: {
    showBackBtn: boolean;
    currentPageTitle: string;
  };
  drawerOpen: boolean;
  loading: boolean;
}

// Action Types:
export const OPEN_NAVIGATION_DRAWER = 'OPEN_NAVIGATION_DRAWER';
export const CLOSE_NAVIGATION_DRAWER = 'CLOSE_NAVIGATION_DRAWER';
export const SET_PAGE_TITLE = 'SET_PAGE_TITLE';
export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';
export const SET_SHOW_BACK_BTN = 'SET_SHOW_BACK_BTN';

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
interface SetShowBackBtnAction {
  type: typeof SET_SHOW_BACK_BTN;
  show: boolean;
}


export type NavigationActionTypes =
  OpenNavigationDrawerAction |
  CloseNavigationDrawerAction |
  StartLoadingAction |
  FinishLoadingAction |
  SetPageTitleAction |
  SetShowBackBtnAction
  ;
