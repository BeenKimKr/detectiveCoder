import React from "react";

// 4132d56d272d02315ca59735ac5cd38e

const KakaoLogin = () => {
  return (
    <div>
      <a href="javascript:kakao();"></a>
      <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      <div>
        window.kakao.init('4132d56d272d02315ca59735ac5cd38e');

        const Kakao = () => {
          window.kakao.Auth.login({
            scope:'profile_nickname, profile_image, account_email, gender, age_range, birthday',
            success: function(authObj) {
              console.log(authObj);
              window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                  const kakao_account = res.kakao_account;
                  console.log(kakao_account);
                }
              });
            }
          })
          
        }      
      </div>
    </div>
  )
}


export default KakaoLogin;