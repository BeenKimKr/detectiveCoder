import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CityInfo from "./pages/cityInfo/CityInfo";
import MainSurvey from "./pages/MainSurvey";
import { loginReducer } from "./reducer";
// import RedirectKakao from './components/Kakao/RedirectKakao';

import AllCities from "./pages/allCities/AllCities";
import * as Api from "./api";
import "./App.css";

export const ResultContext = createContext();

function App() {
  // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      const currentUser = res.data;
      console.log(currentUser);
      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <Router>
            <Routes>
              <Route path="/main" element={<Home />} />
              <Route path="/cityinfo" element={<CityInfo />} />
              <Route path="/allcities" element={<AllCities />} />
              <Route path="/mainsurvey" element={<MainSurvey />} />
              {/* <Route path='/users/kakao/callback' element={<RedirectKakao />} /> */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        </UserStateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
