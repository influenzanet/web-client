import thunk from 'redux-thunk';
import navigationSlice from './navigation/navigationSlice';
import generalSlice from './general/generalSlice';
import apiSlice from './api/apiSlice';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';

const reducers = {
  general: generalSlice.reducer,
  api: apiSlice.reducer,
  navigation: navigationSlice.reducer,
};

const middleWare = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: reducers,
  middleware: middleWare,
});

// export type AppDispatch = typeof store.dispatch;

export default store;
