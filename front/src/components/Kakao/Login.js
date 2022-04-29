import { KAKAO_AUTH_URL } from '../Kakao/OAuth';

const kakao = () => {
  return (
    <KaKaoBtn href={KAKAO_AUTH_URL}>
      <img src={kakaologo}></img>
      <span>카카오계정 로그인</span>
    </KaKaoBtn>
  );
};

export default KaKaoBtn;
