import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLogin } from 'redux/slices/auth/authSelectors';

 export const RestrictedRout = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(getIsLogin);
  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};
