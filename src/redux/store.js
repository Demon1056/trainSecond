import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filter/filterSlice';
import { contactsReducer} from './slices/contacts/contactsSlice'; 
import { persistedAuthReduсer} from './slices/auth/authSlise';
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