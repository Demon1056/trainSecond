import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/slices/contacts/contactsOperations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteCont = e => {
    const idOfDeleteContact = e.target.dataset.id;
    dispatch(deleteContact(idOfDeleteContact));
  };
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" data-id={id} onClick={deleteCont}>
        delete
      </button>
    </li>
  );
};
