import React, { useContext } from 'react';
import { CLIENT_ID } from './OAuth';
import { DispatchContext } from '../../App';
// import KaKaoLogin from 'react-kakao-login';
import * as Api from '../../api';

const Login = () => {
  const dispatch = useContext(DispatchContext);
  const onClick = async () => {
    try {
      // "user/login" 엔드포인트로 post요청함.
      const res = await Api.get('users/current');
      const currentUser = res.data;
      console.log(currentUser);
      dispatch({
        type: 'LOGIN_SUCCESS',
        // payload: user,
      });
    } catch (err) {
      // if (err.response) {
      //   console.log(error);
      // }
      console.log('실패');
    }
  };
  return (
    <a href='http://localhost:5001/users/kakao/callback' onClick={onClick()}>
      {' '}
      <img src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg' />
    </a>
  );
};

export default Login;
