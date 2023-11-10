import { createStore } from "redux";

import { getContactsFromLocaleStorage } from "api/localeStorageApi";
const lol = getContactsFromLocaleStorage()
export const appState = lol? {
    contacts: [...lol],
    filter: ""
  }:{
    contacts: [],
    filter: ""
  }

  const rootReducer = (state = appState , action) => {
    return state;
  };

  export const store = createStore(rootReducer);

