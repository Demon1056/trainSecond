import { Formik, Form } from 'formik';

import { CustomInput, CustomErrorMessage } from './Form.styled';

import { formSchema } from 'validation/validation';

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
