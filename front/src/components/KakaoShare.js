import React, { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: 'COUNTRY GOGO',
          description: '당신의 제 2의 고향을 찾아드립니다! #CityMBTI',
          imageUrl:
            'https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_1280.jpg',
          link: {
            mobileWebUrl: 'http://elice-kdt-ai-4th-team16.elicecoding.com',
            webUrl: 'http://elice-kdt-ai-4th-team16.elicecoding.com',
          },
        },
        social: {
          likeCount: 620,
          commentCount: 55,
          sharedCount: 846,
        },
        buttons: [
          {
            title: '나와 어울리는 도시는?',
            link: {
              mobileWebUrl: 'http://elice-kdt-ai-4th-team16.elicecoding.com',
              webUrl: 'http://elice-kdt-ai-4th-team16.elicecoding.com',
            },
          },
        ],
      });
    }
  };
  return (
    <div className='kakao-share-button'>
      {/* Kakao share button */}
      <button id='kakao-link-btn'>
        <img src='/imgs/kakaolink.png' alt='kakao-share-icon' />
      </button>
    </div>
  );
};
export default KakaoShareButton;
