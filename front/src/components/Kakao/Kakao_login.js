import React from 'react';
import KakaoLogin from 'react-kakao-login';

<a href='kakaoLogin();'>
  <img src='./kakao_login.png' alt='카카오계정 로그인' style='height: 100px;' />
</a>;

const Kakao_login = () => {
  return (
    <div>
      <div>
        window.Kakao.init('4db0ceddd72b85015bb53fc2b6c81918'); function
        kakaoLogin(){' '}
        {window.Kakao.Auth.login({
          scope: 'profile, account_email, gender, age_range, birthday', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
          success: function (response) {
            console.log(response); // 로그인 성공하면 받아오는 데이터
            window.Kakao.API.request({
              // 사용자 정보 가져오기
              url: '/v2/user/me',
              success: (res) => {
                const kakao_account = res.kakao_account;
                console.log(kakao_account);
              },
            });
            window.location.href = '/allcities'; // window.location.href='/ex/kakao_login.html' //리다이렉트 되는 코드
          },
          fail: function (error) {
            console.log(error);
          },
        })}
      </div>
    </div>
  );
};

export default Kakao_login;
