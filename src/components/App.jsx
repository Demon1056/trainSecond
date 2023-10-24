import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount(){
    const storageData = localStorage.getItem("contacts")
    if (storageData){
      const parsedData=JSON.parse(storageData)
      this.setState({contacts:parsedData})
    }
  }

  handlerSubmit = (values, actions) => {
    const { contacts } = this.state;
    const obj = contacts.find(
      ({ name }) => name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
    );
    if (obj) {
      return alert('Is allready in phonebook');
    }

    const newContact = { ...values, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    actions.resetForm();
    
    
  };

  updateFilteredValue = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacts = value =>
    this.state.contacts.filter(({ name }) =>
      name.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
    );

  deleteContact = e => {
    const idOfDeleteContact = e.target.dataset.id;
    const deleteIndex = this.state.contacts.findIndex(
      contact => contact.id === idOfDeleteContact
    );
    this.setState(prevState => {
      prevState.contacts.splice(deleteIndex, 1);
      return {
        contacts: [...prevState.contacts],
      };
    });
  };

  render() {
    const {
      filterContacts,
      handlerSubmit,
      updateFilteredValue,
      deleteContact,
      state,
    } = this;
    const { filter, contacts } = state;
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
  }
}
