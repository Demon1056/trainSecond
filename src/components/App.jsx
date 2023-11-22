import { Routes, Route } from "react-router-dom";
import { Container } from './Container/Container';
import { getErorr } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { ContactsPage } from 'pages/ContactsPage';
import { LoginPage } from 'pages/Login';
import { RegistrationPage } from 'pages/Registration';
import { NotFound } from "pages/NotFound";
export const App = () => {
  const error = useSelector(getErorr);

  return (<Routes>
    <Route path="/"element={<Container/>}>
     <Route index element={error ? <h1>{error}</h1> : <ContactsPage />}/> 
      <Route path="login" element={<LoginPage />}/>
      <Route path="registration" element={ <RegistrationPage /> }/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
