// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { getContacts, getFilter } from 'redux/selectors';
import { addConstact, deleteContact, changeFilter } from 'redux/actions';

// import { getContactsFromLocaleStorage } from 'api/localeStorageApi';


export const App = () => {
  // const [contacts, setContacts] = useState(getContactsFromLocaleStorage);
  // const [filter, setFilter] = useState('');
const contacts = useSelector(getContacts)
console.log(contacts);
const filter = useSelector(getFilter)
const dispatch = useDispatch();
  const handlerSubmit = (values, actions) => {
    const objContact = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
    );
    if (objContact) {
      return alert('Is allready in phonebook');
    }
    const newContact = { ...values, id: nanoid() };
    dispatch(addConstact(newContact))
    // setContacts(prevState => [...prevState, newContact]);
   
//  localStorage.setItem('contacts', JSON.stringify(data)),
 
    actions.resetForm();
  };

  const updateFilteredValue = e => {
    dispatch(changeFilter(e.target.value));
  };

  const filterContacts = value =>
    contacts.filter(({ name }) =>
      name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    );

  const deleteCon = e => {
    const idOfDeleteContact = e.target.dataset.id;
    dispatch(deleteContact(idOfDeleteContact))
    // const deleteIndex = contacts.findIndex(
    //   contact => contact.id === idOfDeleteContact
    // );
    // const updatedContacts = [...contacts];
    // updatedContacts.splice(deleteIndex, 1);
    // setContacts(updatedContacts);
  };

  return (
    <Container>
      <CustomTitle text={'PhoneBook'} />
      <MyForm updateContact={handlerSubmit} />
      <CustomTitle text={'Contacts'} />
      <Filter value={filter} handlerInput={updateFilteredValue} />
      {contacts.length ? (
        <Contacts data={filterContacts(filter)} deleteContact={deleteCon} />
      ) : (
        <p>O shirt</p>
      )}
    </Container>
  );
};

