import { combineReducers } from "redux";
import { getContactsFromLocaleStorage } from "api/localeStorageApi";

const lol = getContactsFromLocaleStorage()

const contactsState = lol? 
    {contacts: [...lol]}:
    {contacts: []}

  
const filterState = {filter: ''}

const contactsReducer = (state=contactsState, action)=>{
    switch (action.type){
        case "contacts/addConstact":
            
    }
    return
}

const filtersReducer = (state=filterState, action)=>{
    return
}

  export const rootReducer =combineReducers({
    constacts: contactsReducer,
    filters: filtersReducer,
  });