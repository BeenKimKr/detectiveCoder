import React, { Component } from 'react';
import { KAKAO_AUTH_URL } from '../Kakao/OAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoLogin = () => {
  console.log('KakaoLogin');
  return (
    <>
      <a href="http://localhost:5001/users/kakao">
        <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" />{' '}
      </a>
    </>
  );
};

export default KakaoLogin;
