import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateObject } from '../utils';

export interface NavigationState {
  showNavigation: boolean;
  appBar: {
    showMenuButton: boolean;
    showBackBtn: boolean;
    currentPageTitle: string;
  };
  drawerOpen: boolean;
  loading: boolean;
}

const initialState: NavigationState = {
  showNavigation: true,
  appBar: {
    currentPageTitle: 'InfluenzaNet',
    showBackBtn: false,
    showMenuButton: true,
  },
  drawerOpen: false,
  loading: false,
} as NavigationState;

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
      return state;
    },
    setShowNavigation: (state, action: PayloadAction<boolean>) => {
      state.showNavigation = action.payload;
      return state;
    },
    openNavigationDrawer: state => updateObject(state, { drawerOpen: true }),
    closeNavigationDrawer: state => updateObject(state, { drawerOpen: false }),
    setPageTitle: (state, action: PayloadAction<string>) =>
      updateObject(state, {
        appBar: {
          ...state.appBar,
          currentPageTitle: action.payload,
        }
      }),
    setShowBackBtn: (state, action: PayloadAction<boolean>) =>
      updateObject(state, {
        appBar: {
          ...state.appBar,
          showBackBtn: action.payload,
        }
      }),
    setShowMenuButton: (state, action: PayloadAction<boolean>) => {
      state.appBar.showMenuButton = action.payload;
      return state;
    },
    startLoading: state => updateObject(state, { loading: true }),
    finishLoading: state => updateObject(state, { loading: false }),
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
