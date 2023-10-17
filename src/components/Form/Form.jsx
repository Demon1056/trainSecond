import { Formik, Field, Form } from 'formik';

export const MyForm =()=>{
    
    return (<Formik initialValues={{
        name: '',
     }}>
        <Form  > 
            <label htmlFor="name">Name</label>
        <Field name="name" id='name'></Field>
      </Form>
    </Formik>)
}