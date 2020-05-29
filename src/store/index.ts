import thunk from 'redux-thunk';
import navigationSlice from './navigation/navigationSlice';
import generalSlice from './general/generalSlice';
import apiSlice from './api/apiSlice';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import userSlice from './user/userSlice';

const reducers = {
  general: generalSlice.reducer,
  api: apiSlice.reducer,
  navigation: navigationSlice.reducer,
  user: userSlice.reducer,
};

const middleWare = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: reducers,
  middleware: middleWare,
});

// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>

export default store;
