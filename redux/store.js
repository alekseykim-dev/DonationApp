import {combineReducers, getDefaultMiddleware} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import User from './reducers/User';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default store;
