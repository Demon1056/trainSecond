import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { UserHeader } from 'components/Container/userHedear/userHeader';
import { AuthHeader } from 'components/Container/AuthHeader/AuthHeader';
import { CustomContainer } from './Container.styled';

import { getIsLogin } from 'redux/slices/auth/authSelectors';

export const Container = () => {
  const isLogin = useSelector(getIsLogin);
  
  return (
    <CustomContainer>
      {isLogin ? <UserHeader /> : <AuthHeader />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CustomContainer>
  );
};
