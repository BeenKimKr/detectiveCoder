import React from 'react';
import { CLIENT_ID } from './OAuth';
import KaKaoLogin from 'react-kakao-login';

const Login = () => {
  const onSuccess = (e) => {
    alert(`${e.profile.properties.nickname}😊 로그인에 성공하였습니다.`);
    console.log(e);
  };

  const onFail = (e) => {
    alert('로그인에 실패하였습니다.');
    console.log(e);
  };

  return (
    <KaKaoLogin
      token={CLIENT_ID}
      onSuccess={onSuccess}
      onFail={onFail}
      onLogout={console.info}
      render={({ onClick }) => {
        return (
          <a
            href='/home'
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            Kakao
          </a>
        );
      }}
    />
  );
};

export default Login;
