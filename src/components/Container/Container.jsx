import { useDispatch, useSelector } from 'react-redux';
import { CustomContainer } from './Container.styled';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getIsLogin, getUser } from 'redux/selectors';
import { logOutOperation } from 'redux/slices/operations';

export const Container = () => {
  const dispatch=useDispatch()
  const user = useSelector(getUser);
  const isLogin = useSelector(getIsLogin);
  const handlerLogOut = ()=>{
dispatch(logOutOperation())
  }
  return (
    <CustomContainer>
      {isLogin ? (
        <div>
          <p style={{ marginRight: '10px' }}>{user.name}</p>
          <p style={{ marginRight: '10px' }}>{user.email} </p>
          <button type="button" onClick={handlerLogOut}>Press to Log Out</button>
        </div>
      ) : (
        <div>
          <nav>
            <ul style={{ display: 'flex' }}>
              <li>
                <NavLink
                  to="/login"
                  style={{ marginRight: '20px', color: 'yellow' }}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/registration" style={{ color: 'yellow' }}>
                  Registartion
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <Outlet />
    </CustomContainer>
  );
};
