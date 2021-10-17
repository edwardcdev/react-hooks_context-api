import React, { createContext, useState, } from 'react';

import { login, signup } from './userUtil';

import User from '../../interface/user.interface';

interface IUser {
  loggedInStatus: boolean,
  changeLoginStatus: Function,
  loginUser: Function,
  signupUser: Function,
  signoutUser: Function
}

interface IUserProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUser>({
  loggedInStatus: false,
  changeLoginStatus: () => {},
  loginUser: (user: User) => {},
  signupUser: (user: User) => {},
  signoutUser: () => {}
})

const UserProvider: React.FC<IUserProps> = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState<boolean>(false);

  const changeLoginStatus = (status: boolean): void => {
    setLoggedInStatus(status);
  }

  const signoutUser = (): void => {
    setLoggedInStatus(false);
    alert('You have signed out!');
  }

  const loginUser = (user: User) => {
    login(user).then(res => {
      changeLoginStatus(true);
      console.log(loggedInStatus);
      alert('User is logged in!');
    }).catch(err => {
      // console.log('User logged in error: ', JSON.parse(error));
      alert("User Credentials are wrong!");
    })
  }

  const signupUser = (user: User) => {
    signup(user).then(res => {
      setLoggedInStatus(true);
      console.log(loggedInStatus);
      alert('User has been signed up!');
    }).catch(err => {
      alert("User cannot be created!")
    })
  }

  return (
    <UserContext.Provider
      value={{ loggedInStatus, changeLoginStatus, loginUser, signupUser, signoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;