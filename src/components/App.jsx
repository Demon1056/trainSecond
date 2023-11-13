import { useSelector } from 'react-redux';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <CustomTitle text={'PhoneBook'} />
      <MyForm />
      <CustomTitle text={'Contacts'} />
      <Filter />
      {contacts.length ? <Contacts /> : <p>O shirt</p>}
    </Container>
  );
};
