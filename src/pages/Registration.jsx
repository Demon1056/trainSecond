import { useDispatch } from 'react-redux';

import { createUser } from 'redux/slices/auth/authOperations';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const addUser = e => {
    e.preventDefault();
    const form = document.forms['registration'];
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(createUser(user));
    form.reset();
  };
  return (
    <>
      <h1>Registration page</h1>
      <form name="registration" onSubmit={addUser}>
        <label>
          {' '}
          Name <input type="text" name="name" />
        </label>
        <label>
          Email <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="text" name="password" />
        </label>
        <button type="submit">type to register</button>
      </form>
    </>
  );
};

export default RegistrationPage