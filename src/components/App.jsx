import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/Login';
import { RegistrationPage } from 'pages/Registration';
import { NotFound } from 'pages/NotFound';
import { RestrictedRout } from './RestrictedRout/RestrictedRout';
import { PrivateRout } from './PrivateRoute/PrivateRout';

import { Container } from './Container/Container';

import { isUserLoading } from 'redux/selectors';
import { refreshUser } from 'redux/slices/operations';

export const App = () => {
  const userLoading = useSelector(isUserLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !userLoading && (
      <Routes>
         <Route path="/" element={<Container />}>
         <Route index element={<PrivateRout component={ContactsPage} redirectTo={'/login'}/>}/>
          <Route
            path="login"
            element={<RestrictedRout component={LoginPage} />}
          />
          <Route
            path="registration"
            element={<RestrictedRout component={RegistrationPage} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />   
      </Routes>
    )
  );
};
