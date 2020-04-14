import {
  OPEN_NAVIGATION_DRAWER,
  CLOSE_NAVIGATION_DRAWER,
  START_LOADING,
  FINISH_LOADING,
  SET_PAGE_TITLE,
  SET_SHOW_BACK_BTN,
  NavigationActionTypes
} from "./types";

export function openNavigationDrawer(): NavigationActionTypes {
  return {
    type: OPEN_NAVIGATION_DRAWER,
  }
}

export function closeNavigationDrawer(): NavigationActionTypes {
  return {
    type: CLOSE_NAVIGATION_DRAWER,
  }
}

export function startLoading(): NavigationActionTypes {
  return {
    type: START_LOADING,
  }
}

export function finishLoading(): NavigationActionTypes {
  return {
    type: FINISH_LOADING,
  }
}

export function setPageTitle(title: string): NavigationActionTypes {
  return {
    type: SET_PAGE_TITLE,
    title: title,
  }
}

export function setShowBackBtn(show: boolean): NavigationActionTypes {
  return {
    type: SET_SHOW_BACK_BTN,
    show: show,
  }
}
