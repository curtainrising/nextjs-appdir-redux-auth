'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'lodash';
import { useRouter } from 'next/navigation'

import { login } from '@/redux/actions/api';

import { Input } from '@/ui/exportedComponents';

const Login = (props) => {
  let router = useRouter();
  let {
    user
  } = useSelector(state => mapStateToProps(state, props))

  let {
    doLogin
  } = mapDispatchToProps(useDispatch(), props);

  const handleClick = async () => {
    doLogin();
  }
  useEffect(() => {
    if (user && user.token) {
      router.push('/');
    }
  },[user])
  return (
    <div>
      <Input
        id='login-username'
        label="Username"
      />
      <Input
        id='login-password'
        label="Password"
      />
      <button onClick={handleClick}>
        click me to log in
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: get(state, 'user', {}),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: () => {
      dispatch(login())
    }
  }
}

export default Login;