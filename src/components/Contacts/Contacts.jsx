
import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/slices/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();

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

  const deleteCont = e => {
    const idOfDeleteContact = e.target.dataset.id;
    dispatch(deleteContact(idOfDeleteContact));
  };
  return (
    contacts.length > 0 && (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" data-id={id} onClick={deleteCont}>
              delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};
