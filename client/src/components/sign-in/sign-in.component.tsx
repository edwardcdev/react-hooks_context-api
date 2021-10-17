import React, { useState, useContext } from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import User from '../../interface/user.interface';

import { UserContext } from '../../providers/user/user.provider';

interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = () => {
  const { loggedInStatus, changeLoginStatus, loginUser } = useContext(UserContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [demoEmailCounter, setDemoEmailCounter] = useState<number>(0);
  // const [demoPasswordCounter, setDemoPasswordCounter] = useState<number>(0);
  // const [demoEmailField, setDemoEmailField] = useState<string>('');
  // const [demoPasswordField, setDemoPasswordField] = useState<string>('');
  let demoEmailCounter: number = 0;
  let demoPasswordCounter: number = 0;
  let demoEmailField: string = '';
  let demoPasswordField: string = '';

  const resetCredentials = () => {
    setEmail('');
    setPassword('');
  }

  const handleDemoLogin = () => {
    resetCredentials();
    demoLogin();
  }

  // Shows demo login thrugh rerender of characters
  const demoLogin = () => {
    const demoEmail = "demo_user@gmail.com";
    const demoPassword = "demouser123";
    let typespeed = 100;
    if (demoEmailCounter < demoEmail.length) {
      demoEmailField = demoEmailField + demoEmail.charAt(demoEmailCounter);
      // setDemoEmailField(demoEmailField + demoEmail.charAt(demoEmailCounter))
      setEmail(demoEmailField);
      demoEmailCounter++;
      console.log(demoEmailField)
      // setDemoEmailCounter(demoEmailCounter + 1);
      setTimeout(demoLogin, typespeed);
    } else if (demoPasswordCounter < demoPassword.length) {
      demoPasswordField = demoPasswordField + demoPassword.charAt(demoPasswordCounter);
      // setDemoPasswordField(demoPasswordField + demoPassword.charAt(demoPasswordCounter));
      setPassword(demoPasswordField);
      // setDemoPasswordCounter(demoPasswordCounter + 1);
      demoPasswordCounter++;
      setTimeout(demoLogin, typespeed);
    } else {
      loginUser({ email: demoEmail, password: demoPassword });
      console.log(email, password);
      changeLoginStatus(true);
      // setDemoEmailCounter(0);
      // setDemoPasswordCounter(0);
      // setDemoEmailField('');
      // setDemoPasswordField('');
      demoEmailCounter = 0;
      demoPasswordCounter = 0;
      demoEmailField = '';
      demoPasswordField = '';
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newUser = { email, password };
    loginUser(newUser);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput 
          name={"email"} 
          type={"email"} 
          value={email} 
          handleChange={() => handleChange}
        />
        <FormInput 
          name={"password"} 
          type={"password"} 
          value={password} 
          handleChange={() => handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={handleDemoLogin}>Demo Login</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;