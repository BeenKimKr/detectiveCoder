import React from 'react';
import { CLIENT_ID } from './OAuth';
import KaKaoLogin from 'react-kakao-login';

const Login = () => {
  const onSuccess = (e) => {
    alert(`${e.profile.properties.nickname}😊 로그인에 성공하였습니다.`);
  };

  const onFail = (e) => {
    alert('로그인에 실패아였습니다.');
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
            href='#'
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}>
            카카오로 로그인하기
          </a>
        );
      }}
    />
  );
};

export default Login;
