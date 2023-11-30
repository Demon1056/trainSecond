import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CustomTitle } from 'components/CustomTitle/CustomTitle';
import { MyForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

import {
  getContacts,
  getIsLoading,
} from 'redux/slices/contacts/contactsSelectors';
import { fetchAllContact } from 'redux/slices/contacts/contactsOperations';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContact());
  }, [dispatch]);

  return (
    <>
      <CustomTitle text={'PhoneBook'} />
      <MyForm />
      <CustomTitle text={'Contacts'} />
      <Filter />
      {isLoading && <h1>LOADING NOW</h1>}
      {(contacts.length && !isLoading && <Contacts />) || (
        <p>You don't have any contacts</p>
      )}
    </>
  );
};

export default ContactsPage