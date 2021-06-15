import React from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validadors';
import { Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import '../common/FormsControls/FormsControls.scss';


const maxLength30 = maxLength(30);

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder='email' name={'email'} component={Input}
					validate={[required, maxLength30]} />
			</div>
			<div>
				<Field placeholder='Password' name={'password'} component={Input}
					type='password'
					validate={[required, maxLength30]} />
			</div>
			<div>
				<Field component={Input} name={'rememberMe'} type='checkbox' /> Remember me
			</div>
			<div>
				<button>Login</button>
			</div>
			{props.error &&
				<div className='ErrorEnter'>
					{props.error}
				</div>
			}
		</form>
	)
}

const LoginReduxForm = reduxForm({
	// a unique name for the form
	form: 'login'
})(LoginForm)

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return (
		<div>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}
export default connect(mapStateToProps, { login })(Login);
