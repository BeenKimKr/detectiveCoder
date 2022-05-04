// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음
export const CLIENT_ID = '4db0ceddd72b85015bb53fc2b6c81918';
export const REDIRECT_URI = 'http://localhost:5001/users/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

// https://kauth.kakao.com/oauth/authorize?client_id=4db0ceddd72b85015bb53fc2b6c81918&redirect_uri=http://localhost:3000/users/kakao/callback&response_type=code
