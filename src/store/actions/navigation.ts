import {
    OPEN_NAVIGATION_DRAWER,
    CLOSE_NAVIGATION_DRAWER,
    SET_PAGE_TITLE,
} from "./actionTypes";

interface OpenNavigationDrawerAction {
    type: typeof OPEN_NAVIGATION_DRAWER;
}

interface CloseNavigationDrawerAction {
    type: typeof CLOSE_NAVIGATION_DRAWER;
}

interface SetPageTitleAction {
    type: typeof SET_PAGE_TITLE;
    title: string;
}

export type NavigationActionTypes =
    OpenNavigationDrawerAction |
    CloseNavigationDrawerAction |
    SetPageTitleAction;