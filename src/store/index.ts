import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducers';
import { navigationReducer } from './navigation/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, applyMiddleware(thunk));