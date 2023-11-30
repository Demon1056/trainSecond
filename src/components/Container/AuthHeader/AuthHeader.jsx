import { NavLink } from 'react-router-dom';

export const AuthHeader = () => {
  return (
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
  );
};
