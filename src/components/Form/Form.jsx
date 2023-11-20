
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slices/operations';
import { getContacts } from 'redux/selectors';
import { Formik, Form } from 'formik';

import { CustomInput, CustomErrorMessage } from './Form.styled';

import { formSchema } from 'validation/validation';
 
export const MyForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  
  const handlerSubmit =  (values, actions) => {
    let objContact
    if(contacts){objContact = contacts.find(
    ({ name }) => name.toLocaleLowerCase() === values.name.toLocaleLowerCase()
  )}
    
    if (objContact) {
      return alert('Is allready in phonebook');
    }
    const newContact = { ...values, id: nanoid() };
     dispatch(addContact(newContact));
    actions.resetForm();
  };
  
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handlerSubmit}
        validationSchema={formSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <CustomInput name="name" id="name"></CustomInput>
          <CustomErrorMessage component="div" name="name" />
          <label htmlFor="name">Number</label>
          <CustomInput type="tel" name="number" id="number"></CustomInput>
          <CustomErrorMessage component="div" name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};
