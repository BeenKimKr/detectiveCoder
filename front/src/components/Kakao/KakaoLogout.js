import React from 'react';

const { Kakao } = window;
const KakaoLogout = () => {
  const onClick = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
    alert('다음에 또 만나요👋');
  };

  return (
    <a href="#" onClick={onClick}>
      로그아웃
    </a>
  );
};

export default KakaoLogout;
