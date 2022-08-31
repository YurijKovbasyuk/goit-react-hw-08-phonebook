import { Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from '../Login/index.module.css';
import { useSignUpMutation } from 'redux/loginApi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';
import { useNavigate } from 'react-router-dom';

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
