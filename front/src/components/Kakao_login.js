import React, { Component } from 'react';

const token = 'f3ab80f45ba58775ef31fcf61bd1031f';

export const KakaoLogin = () => (
  <KakaoLogin
    token={token}
    onSuccess={console.log}
    onFail={console.error}
    onLogout={console.info}
  />
);

export default KakaoLogin;
