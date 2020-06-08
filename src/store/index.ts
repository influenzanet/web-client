import navigationSlice, { navigationActions } from './navigation/navigationSlice';
import generalSlice from './general/generalSlice';
import apiSlice, { apiActions } from './api/apiSlice';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import userSlice, { userActions } from './user/userSlice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle'
import studySlice, { studyActions } from './study/studySlice';

const reducers = {
  general: generalSlice.reducer,
  api: apiSlice.reducer,
  navigation: navigationSlice.reducer,
  user: userSlice.reducer,
  study: studySlice.reducer,
};

const middleWare = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: reducers,
  middleware: middleWare,
  preloadedState: loadState(),
});

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export const resetStore = () => {
  let oldState = store.getState();
  let oldLanguage = oldState.user.currentUser.account.preferredLanguage;

  // store.dispatch(generalActions.reset());
  store.dispatch(apiActions.reset());
  store.dispatch(navigationActions.reset());
  store.dispatch(userActions.reset());
  store.dispatch(studyActions.reset());

  if (oldLanguage) store.dispatch(userActions.setPreferredLanguage(oldLanguage));
}

export type RootState = ReturnType<typeof store.getState>

export default store;
