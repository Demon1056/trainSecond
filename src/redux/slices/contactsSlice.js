import { createSlice } from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsSlice = createSlice({
    name:"contacts",
    initialState: [] ,
     reducers:  {addConstact (state, action){
         state.contacts.push(action.payload)
      },
      deleteContact(state, action){
        const idOfDeleteContact = action.payload
   const newState= state.contacts.filter(contact =>contact.id !== idOfDeleteContact);
   return {...state, contacts:newState} 
      }}}
)

const persistConfig = {
  key: 'contacts',
  storage,
}

export const {addConstact, deleteContact} = contactsSlice.actions
const contactsReducer=contactsSlice.reducer

export const persistedContactsReduсer = persistReducer(persistConfig, contactsReducer )