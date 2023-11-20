import { useDispatch, useSelector } from 'react-redux';

import { Container } from './Container/Container';
import { CustomTitle } from './CustomTitle/CustomTitle';
import { MyForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { fetchAllContact } from 'redux/slices/operations';
import { getContacts, getErorr, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);
  const error = useSelector(getErorr);
  const isLoading = useSelector(getIsLoading);
  useEffect(()=>{dispatch(fetchAllContact())
    
  },[dispatch])
  return (
    <Container>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <>
          {' '}
          <CustomTitle text={'PhoneBook'} />
          <MyForm />
          <CustomTitle text={'Contacts'} />
          <Filter />
          {isLoading && <h1>LOADING NOW</h1>}
          {contacts.length || !isLoading ? <Contacts /> : <p>O shirt</p>}
        </>
      )}
    </Container>
  );
};
