import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutMutation } from 'redux/loginApi';
import * as actions from 'redux/phonebook-actions';
import styles from '../UserMenu/index.module.css';

const UserMenu = () => {
  const [logOut] = useLogOutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { email, token } = useSelector(state => state.user);

  const handleLogOut = () => {
    logOut(token);
    dispatch(actions.setToken(null));
    navigate('/login');
  };
  return (
    <Fragment>
      {email && (
        <div className={styles.userMenu}>
          <p>{email}</p>
          <Button
            onClick={() => {
              handleLogOut();
            }}
          >
            Log out
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default UserMenu;
