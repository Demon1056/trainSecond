import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { CustomInput, CustomErrorMessage } from './Form.styled';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Це обовязкове поле')
    .min(3, 'мінімум 3 букви')
    .matches(/^[a-zA-Z\s]+$/, 'Дозволені лише латинські букви'),
  number: Yup.string()
    .required('Це обовязкове поле')
    .length(9, 'має містити 9 символів у форматі 456-58-78')
    .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'невірний формат'),
});

export const MyForm = ({ updateContact }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={updateContact}
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
