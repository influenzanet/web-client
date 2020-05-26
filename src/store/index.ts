import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducers';
import navigationSlice from './navigation/navigationSlice';
import generalSlice from './general/generalSlice';

const rootReducer = combineReducers({
  general: generalSlice.reducer,
  auth: authReducer,
  navigation: navigationSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk));
