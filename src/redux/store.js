import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { contactsReducer} from './slices/contactsSlice'; 
import { persistedAuthReduсer} from './slices/authSlise';
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
  reducer: { contacts: contactsReducer, filter: filterReducer, auth:persistedAuthReduсer },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},
    }),
});

export const persistor = persistStore(store)