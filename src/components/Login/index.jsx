import { Button, Input, InputLabel } from '@mui/material';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from 'redux/Auth/loginApi';
import * as action from 'redux/Contacts/phonebook-actions';
import styles from '../Login/index.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    let resp = {
      email: email,
      password: password,
    };

    logIn(resp)
      .then(data => dispatch(action.setToken(data.data.token)))
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert(`check your email or password`);
      });
  };
  return (
    <Fragment>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
        className={styles.form_body}
      >
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          onChange={e => setEmail(e.target.value)}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <InputLabel htmlFor="my-password">Password</InputLabel>
        <Input onChange={e => setPassword(e.target.value)} id="my-password" />
        <br />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
    </Fragment>
  );
};

export default Login;
