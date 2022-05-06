const { Kakao } = window;

export default function initialize() {
  Kakao.init(process.env.KAKAO_CLIENT_ID);
}
