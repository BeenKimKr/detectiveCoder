import React from 'react';
import { KAKAO_AUTH_URL } from '../Kakao/OAuth';

const Kakao = () => {
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src='/imgs/kakao_login.png'></img>
      <span>카카오계정 로그인</span>
    </a>
  );
};

export default Kakao;
