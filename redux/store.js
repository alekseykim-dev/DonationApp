import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import User from './reducers/User';
import Categories from './reducers/Categories';
import Donations from './reducers/CoffeeShops';
import {logger} from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  donations: Donations,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({serializableCheck: false})
    // .concat(logger);
  },
  // shows prev, curr, next actions in logs
});

export default store;
export const persistor = persistStore(store);
// deletes previous store data
// persistor.purge() 
// purge reloads the store and dispatcehs the data  
//Works the same as the resetDonations in Home.js