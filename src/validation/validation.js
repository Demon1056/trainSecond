import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Це обовязкове поле')
      .min(3, 'мінімум 3 букви')
      .matches(/^[a-zA-Z\s]+$/, 'Дозволені лише латинські букви'),
    number: Yup.string()
      .required('Це обовязкове поле')
      .length(9, 'має містити 9 символів у форматі 456-58-78')
      .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, 'невірний формат'),
  });
  