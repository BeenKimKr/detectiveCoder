import React from 'react';

const { Kakao } = window;
const KakaoLogout = () => {
  if (!Kakao.Auth.getAccessToken()) {
    alert('Not logged in.');
    return;
  }
  Kakao.Auth.logout(function () {
    alert('logout ok\naccess token -> ' + Kakao.Auth.getAccessToken());
  });
  return (
    <a href='#' onClick={KakaoLogout()}>
      로그아웃
    </a>
  );
};

export default KakaoLogout;
