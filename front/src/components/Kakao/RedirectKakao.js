import React, { useContext, useEffect } from 'react';
// import { saveResult } from '../../App';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../api';
import { ResultContext } from '../../App';


const RedirectKakao = () => {
  const navigate = useNavigate();
  // const dispatch = useContext(DispatchContext);

  let code = new URL(window.location.href).searchParams.get('code');
  const { user, setUser } =
    useContext(ResultContext);


  // // React.useEffect(() => {
  // //   dispatch(kakaoLogin(code));
  // }, []);

  const kakaoLogin = async (code) => {
    console.log('aa');
    try {
      const res = await Api.get(
        `http://localhost:5001/users/kakao/callback?code=${code}`
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
