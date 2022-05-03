import { DispatchContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../api';


  React.useEffect(() => {
    dispatch(kakaoLogin(code));
  }, []);

  const kakaoLogin = async (code) => {
    console.log('리다이렉트');
    try {
      const res = await Api.get(
        `http://localhost:3000/users/kakao/callback?code=${code}`
      );
      console.log(res);
      // dispatch({
      //   type: 'LOGIN_SUCCESS',
      //   payload: user,
      // });
      navigate('/home');
    } catch (err) {
      console.log('로그인실패!');
    }
  };
};

export default RedirectKakao;
