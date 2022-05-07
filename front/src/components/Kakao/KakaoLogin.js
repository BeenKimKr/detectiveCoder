import React from 'react';
import { CLIENT_ID } from './OAuth';
import KaKaoLogin from 'react-kakao-login';

const Login = ({ setUserToken, setName }) => {
  const onSuccess = (e) => {
    alert(`${e.profile.properties.nickname}😊 로그인에 성공하였습니다.`);
    console.log(e);
    sessionStorage.setItem(
      'userToken',
      JSON.stringify(e.response.access_token)
    );
    console.log(e.response.access_token);

    setUserToken(sessionStorage.getItem('userToken'));
    setName(e.profile.properties.nickname);
    console.log(e.profile.properties.nickname);
  };

  const onFail = (e) => {
    alert('로그인에 실패하였습니다.');
    console.log(e);
  };

  const onLogout = () => {
    sessionStorage.removeItem('userToken');
  };

  return (
    <KaKaoLogin
      token={CLIENT_ID}
      onSuccess={onSuccess}
      onFail={onFail}
      onLogout={onLogout}
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
