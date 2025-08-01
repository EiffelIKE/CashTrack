import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import currenciesReducer, { currenciesSliceName } from './slices/CurrencySlice';
import themeReducer, { themeSliceName } from './slices/ThemeSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [themeSliceName, currenciesSliceName]
};

const rootReducer = combineReducers({
  theme: themeReducer,
  availableCurrencies: currenciesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;