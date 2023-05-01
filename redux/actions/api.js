import { get } from 'lodash';
import Cookies from 'js-cookie';
import { loginSuccess } from '../reducers/userReducer';

const login = (type, value) => {
  return async (dispatch, getState) => {
    let userName = get(getState(), 'formData.login-username');
    let password = get(getState(), 'formData.login-password');
    let res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({userName, password})
    })
    
    let data = await res.json();
    Cookies.set('token', data.token, { expires: 7 });
    dispatch(loginSuccess(data));
  }
}

export {
  login
}