import axios from 'axios'
import User from '../../interface/user.interface';

const changeResponseForHeroku = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  }
}

export const signup = (userData: User) => {
  return axios.post('/api/users/signup', userData, changeResponseForHeroku);
};

export const login = (userData: User) => {
  return axios.post('/api/users/login', userData, changeResponseForHeroku);
};

export const setAuthToken = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};