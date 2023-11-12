import { combineReducers } from 'redux';
import { getContactsFromLocaleStorage } from 'api/localeStorageApi';

const lol = getContactsFromLocaleStorage();

const contactsState = lol ? [...lol] : [];

const filterState =  ''

const contactsReducer = (state = contactsState, action) => {
  switch (action.type) {
    case 'contacts/addConstact':
      return [...state, ...action.payload];

    case 'contacts/deleteConstact':
      const idOfDeleteContact = action.payload;
      const deleteIndex = state.findIndex(
        contact => contact.id === idOfDeleteContact
      );
      const updatedContacts = [...state];
      updatedContacts.splice(deleteIndex, 1);
      return updatedContacts
    default:
      return state;
  }
};

const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return { filter: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
