import React, { Component } from 'react';
import { KAKAO_AUTH_URL } from '../Kakao/OAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoLogin = () => {
  console.log('KakaoLogin');
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src="/imgs/kakao_login.png"></img>
    </a>
  );
};

export default KakaoLogin;
