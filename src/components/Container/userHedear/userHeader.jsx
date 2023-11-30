import { logOutOperation } from 'redux/slices/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from 'redux/slices/auth/authSelectors';

export const UserHeader = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const handlerLogOut = () => {
    dispatch(logOutOperation());
  };
  return (
    <div>
      <p style={{ marginRight: '10px' }}>{user.name}</p>
      <p style={{ marginRight: '10px' }}>{user.email} </p>
      <button type="button" onClick={handlerLogOut}>
        Press to Log Out
      </button>
    </div>
  );
};
