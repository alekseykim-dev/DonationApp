import {combineReducers} from '@reduxjs/toolkit';

import User from './reducers/User';

const rootReducer = combineReducers({
  user: User,
});
