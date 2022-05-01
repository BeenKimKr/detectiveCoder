import React, { useEffect } from 'react';

import Kakao from '../initialize';

const Explain = useEffect(() => {
  Kakao.init('process.env.KAKAO_CLIENT_ID');
}, []);

const KakaoShare = () => {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: themeData.title,
      description: '내용!',
      imageUrl: themeData.titleImage,
      link: {
        mobileWebUrl: '모바일 url!',
        androidExecParams: 'test',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: '공유할 url!',
        },
      },
    ],
  });

  return (
    <>
      <button onClick={KakaoShare}>카카오톡 공유하기</button>
    </>
  );
};
export default KakaoShare;
