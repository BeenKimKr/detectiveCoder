import React, { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';

const Login = (props) => {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const query = queryString.parse(window.location.search);
  useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
  }, []);
  const getKakaoTokenHandler = async (code) => {
    const data = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: 'vxS2rzKh5KlmNaH1J3aZeumA93mTTmUI',
    };
    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');
    // console.log(queryString);
    axios
      .post('https://kauth.kakao.com/oauth/token', queryString, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then((res) => {
        sendKakaoTokenToServer(res.data.access_token);
      });
  };
  //일반 로그인
  const sendKakaoTokenToServer = (token) => {
    axios
      .post('http://localhost:5001/users/auth/kakao', { accessToken: token })
      .then((res) => {
        if (res.status == 201 || res.status == 200) {
          const user = res.data;
          window.localStorage.setItem(
            'token',
            JSON.stringify({
              access_token: res.data.jwt,
            })
          );
          console.log(window.localStorage.getItem('token'));
          console.log(user);
        } else {
          window.alert('로그인에 실패하였습니다.');
        }
      });
  };

  return (
    <>
      <a href={kauthUrl}>
        <img src='kakao_login.png' id='kakao-login-btn' width='250px' />
      </a>
    </>
  );
};

export default Login;
