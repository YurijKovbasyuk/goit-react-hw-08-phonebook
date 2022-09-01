import { Button, Input, InputLabel } from '@mui/material';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from 'redux/Auth/loginApi';
import * as actions from 'redux/Contacts/phonebook-actions';
import styles from '../Login/index.module.css';

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signUp] = useSignUpMutation();

  const handleSubmit = e => {
    e.preventDefault();
    let resp = {
      name: name,
      email: email,
      password: password,
    };

    signUp(resp)
      .then(data => {
        dispatch(actions.setToken(data.data.token));
      })
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert('Bad request');
      });
  };

  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)} className={styles.form_body}>
        <InputLabel htmlFor="my-name">User name</InputLabel>
        <Input
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
          id="my-name"
          aria-describedby="my-helper-text"
        />
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        <InputLabel htmlFor="my-password">Password</InputLabel>
        <Input
          onChange={e => {
            setPassword(e.target.value);
          }}
          value={password}
          id="my-password"
        />
        <br />
        <Button variant="contained" type="submit" className={styles.button}>
          Sign Up
        </Button>
      </form>
    </Fragment>
  );
};

export default Registration;
