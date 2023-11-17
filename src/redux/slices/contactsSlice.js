import { createSlice } from "@reduxjs/toolkit";
import { getContactsFromLocaleStorage } from "api/localeStorageApi"; 

const lol = getContactsFromLocaleStorage();

const contactsState = lol ? [...lol] : [];

const contactsSlice = createSlice({
    name:"contacts",
    initialState: contactsState,
     reducers:  {addConstact (state, action){
        return [...state, action.payload];
      },
      deleteContact(state, action){
        const idOfDeleteContact = action.payload
        return state.filter(contact => contact.id !== idOfDeleteContact);
      }}}
)

export const {addConstact, deleteContact} = contactsSlice.actions
export const contactsReducer=contactsSlice.reducer