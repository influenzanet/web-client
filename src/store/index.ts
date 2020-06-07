import navigationSlice from './navigation/navigationSlice';
import generalSlice from './general/generalSlice';
import apiSlice from './api/apiSlice';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle'
import studySlice from './study/studySlice';

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

export type RootState = ReturnType<typeof store.getState>

export default store;
