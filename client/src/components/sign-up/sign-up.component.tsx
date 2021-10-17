import React, { useState, useContext } from 'react';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';

import { UserContext } from '../../providers/user/user.provider';


// import { signup } from '../../providers/current-user/session_api_util';

const SignUp = () => {
  const { loggedInStatus, signupUser } = useContext(UserContext);
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password doesn't match!");
      return;
    }
    // const newUser = {
    //   displayName: displayName,
    //   email: email,
    //   password: password,
    //   confirmPassword: confirmPassword
    // }
    signupUser(userCredentials);
  }

  const handleChange = (event: React.FormEvent): void => {
    // const target = event.target as HTMLSelectElement
    const { name, value } = event.target as HTMLSelectElement;
    setUserCredentials({ ...userCredentials, [name]: value})
  }

  return (
    <div className="sign-up">
      <h1 className="title">I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          name={'displayName'}
          type={'displayName'}
          value={displayName}
          handleChange={() => handleChange}
        />
        <FormInput
          name={'email'}
          type={'email'}
          value={email}
          handleChange={() => handleChange}
        />
        <FormInput
          name={'password'}
          type={'password'}
          value={password}
          handleChange={() => handleChange}
        />
        <FormInput
          name={'confirmPassword'}
          type={'password'}
          value={confirmPassword}
          handleChange={() => handleChange}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;