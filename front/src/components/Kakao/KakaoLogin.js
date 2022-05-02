import React from 'react';
import { CLIENT_ID } from './OAuth';
import KaKaoLogin from 'react-kakao-login';

const Login = () => {
  return (
    <KaKaoLogin
      token={CLIENT_ID}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
      render={({ onClick }) => {
        return (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            카카오로 로그인하기
          </a>
        );
      }}
    />
  );
};

export default Login;
