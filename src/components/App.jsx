import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

import { getContactsFromLocaleStorage } from 'api/localeStorageApi';

import { appState } from 'redux/store';

export const App = () => {
  const [contacts, setContacts] = useState(getContactsFromLocaleStorage);
  const [filter, setFilter] = useState('');

  const handlerSubmit = (values, actions) => {
    const objContact = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
    );
    if (objContact) {
      return alert('Is allready in phonebook');
    }
    const newContact = { ...values, id: nanoid() };
    setContacts(prevState => [...prevState, newContact]);
    actions.resetForm();
  };

  const updateFilteredValue = e => {
    setFilter(e.target.value);
  };

  const filterContacts = value =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    );

  const deleteContact = e => {
    const idOfDeleteContact = e.target.dataset.id;
    const deleteIndex = contacts.findIndex(
      contact => contact.id === idOfDeleteContact
    );
    const updatedContacts = [...contacts];
    updatedContacts.splice(deleteIndex, 1);
    setContacts(updatedContacts);
  };

  return (
    <Container>
      <CustomTitle text={'PhoneBook'} />
      <MyForm updateContact={handlerSubmit} />
      <CustomTitle text={'Contacts'} />
      <Filter value={filter} handlerInput={updateFilteredValue} />
      {contacts.length ? (
        <Contacts data={filterContacts(filter)} deleteContact={deleteContact} />
      ) : (
        <p>O shirt</p>
      )}
    </Container>
  );
};

console.log(appState);