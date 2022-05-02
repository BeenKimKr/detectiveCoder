import React from 'react';
// import { useNavigate } from 'react-router-dom';
import KakaoLogin from '../components/Kakao/KakaoLogin';

const KakaoHome = () => {
  return (
    <div className='container flex-col h-screen w-screen '>
      <KakaoLogin />
    </div>
  );
};

export default KakaoHome;
