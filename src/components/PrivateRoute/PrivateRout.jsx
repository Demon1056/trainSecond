import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLogin, isUserLoading } from 'redux/slices/auth/authSelectors';

export  const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin);
  const isUsLoading = useSelector(isUserLoading);
  const shouldRedirect = !isLogin && !isUsLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

