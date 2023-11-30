import { useSelector } from 'react-redux';

import { ContactItem } from './ContactItem/ContactItem';

import { getContacts } from 'redux/slices/contacts/contactsSelectors';
import { getFilter } from 'redux/slices/filter/filterSelectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase())
    );
  };
  const filteredContacts = filterContacts();

  return (
    contacts.length > 0 && (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    )
  );
};
