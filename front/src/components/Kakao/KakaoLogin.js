import React from 'react';
import { KAKAO_AUTH_URL } from './OAuth';

const Login = () => {
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src='/imgs/kakao_login.png'></img>
    </a>
  );
};

export default Login;
