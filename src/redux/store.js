import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { contactsReducer} from './slices/contactsSlice'; 

 export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

