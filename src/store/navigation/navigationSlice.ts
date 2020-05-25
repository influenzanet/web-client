import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateObject } from '../utils';

export interface NavigationState {
  appBar: {
    showBackBtn: boolean;
    currentPageTitle: string;
  };
  drawerOpen: boolean;
  loading: boolean;
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    drawerOpen: false,
    appBar: {
      currentPageTitle: 'InfluenzaNet',
      showBackBtn: false,
    },
    loading: false,
  } as NavigationState,
  reducers: {
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
    startLoading: state => updateObject(state, { loading: true }),
    finishLoading: state => updateObject(state, { loading: false }),
  },
});

export const navigationActions = navigationSlice.actions;

export default navigationSlice;
