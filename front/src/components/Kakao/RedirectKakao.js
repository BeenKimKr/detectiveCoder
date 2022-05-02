import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import Spinner from './Spinner';

const RedirectKakao = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get('code');

  React.useEffect(async () => {
    await dispatch(userActions.kakaoLogin(code));
  }, []);

  return <h1>로그인 성공!</h1>;
};

export default RedirectKakao;
