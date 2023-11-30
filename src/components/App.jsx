import { useEffect, lazy } from 'react';
import { NotFound } from 'pages/NotFound';
import { RestrictedRout } from './RestrictedRout/RestrictedRout';
import { PrivateRout } from './PrivateRoute/PrivateRout';

import { Container } from './Container/Container';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoading } from 'redux/slices/auth/authSelectors';
import { refreshUser } from 'redux/slices/auth/authOperations';


const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegistrationPage = lazy(() => import('../pages/Registration'));


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
          <Route
            index
            element={
              <PrivateRout component={ContactsPage} redirectTo={'/login'} />
            }
          />
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
