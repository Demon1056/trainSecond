import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { contactsReducer} from './slices/contactsSlice'; 
import { authReducer } from './slices/authSlise';

 export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer, auth:authReducer },
});

