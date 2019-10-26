import {
    OPEN_NAVIGATION_DRAWER,
    CLOSE_NAVIGATION_DRAWER
} from "./actionTypes";

interface OpenNavigationDrawerAction {
    type: typeof OPEN_NAVIGATION_DRAWER;
}

interface CloseNavigationDrawerAction {
    type: typeof CLOSE_NAVIGATION_DRAWER;
}

export type NavigationActionTypes =
    OpenNavigationDrawerAction |
    CloseNavigationDrawerAction;