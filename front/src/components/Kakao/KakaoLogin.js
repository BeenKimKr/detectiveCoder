import React, { Component } from 'react';
import KaKaoLogin from 'react-kakao-login';

const token = 'f3ab80f45ba58775ef31fcf61bd1031f';

const Login = () => (
  <KaKaoLogin
    token={token}
    onSuccess={console.log}
    onFail={console.error}
    onLogout={console.info}
  />
);

export default Login;
