import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import cartReducer from './cartRedux';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
});
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
