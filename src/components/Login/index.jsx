import { Fragment } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import styles from '../Login/index.module.css';
import { useState } from 'react';
import { useLogInMutation } from 'redux/loginApi';
import { useDispatch } from 'react-redux';
import * as action from '../../redux/phonebook-actions';
import { useNavigate } from 'react-router-dom';

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
