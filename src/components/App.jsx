import { useState} from 'react';
import { nanoid } from 'nanoid';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts'))??[]);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const storageData = localStorage.getItem('contacts');
  //   if (storageData) {
  //     const parsedData = JSON.parse(storageData);
  //     setContacts(parsedData);
  //   }
  // }, []);

  const handlerSubmit = (values, actions) => {
    const obj = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
    );
    if (obj) {
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
    console.log(updatedContacts);
    setContacts(updatedContacts);
  };

  const filteredArray = filterContacts(filter);

  return (
    <Container>
      <CustomTitle text={'PhoneBook'} />
      <MyForm updateContact={handlerSubmit} />
      <CustomTitle text={'Contacts'} />
      <Filter value={filter} handlerInput={updateFilteredValue} />
      {contacts.length ? (
        <Contacts data={filteredArray} deleteContact={deleteContact} />
      ) : (
        <p>O shirt</p>
      )}
    </Container>
  );
};
