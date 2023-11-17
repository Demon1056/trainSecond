import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { persistedContactsReduсer } from './slices/contactsSlice'; 

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

 export const store = configureStore({
  reducer: { contacts: persistedContactsReduсer, filter: filterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)