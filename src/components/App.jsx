import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container';
import { getErorr, isUserLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/Login';
import { RegistrationPage } from 'pages/Registration';
import { NotFound } from 'pages/NotFound';
import { useEffect } from 'react';
import { refreshUser } from 'redux/slices/operations';
import { RestrictedRout } from './RestrictedRout/RestrictedRout';
export const App = () => {
  const error = useSelector(getErorr);
  const userLoading = useSelector(isUserLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !userLoading && 
    (
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={error ? <h1>{error}</h1> : <ContactsPage />} />
          <Route path="login" element={<RestrictedRout component={LoginPage}/>} />
          <Route path="registration" element={<RestrictedRout component={RegistrationPage}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
  );
};
