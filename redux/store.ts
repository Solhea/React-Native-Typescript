import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from '../utils/ReactotronConfig';
import characterReducer from './reducers/characterReducer';
import sharedReducer from './reducers/sharedReducer';
import locationReducer from './reducers/locationReducer';
import client from '../graphql/graphql.config';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['character'],
};

const rootReducer = combineReducers({
  character: characterReducer,
  shared: sharedReducer,
  location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enchancer = __DEV__ ? reactotron.createEnhancer() : undefined;

const store = configureStore({
  reducer: persistedReducer,
  enhancers: [enchancer],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: client,
      },
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
