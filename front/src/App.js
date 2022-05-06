import React, { useState, useReducer, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loginReducer } from './reducer';
import Home from './pages/Home/Home';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';
import axios from 'axios';
import AllCities from './pages/allCities/AllCities';
import * as Api from './api';
import './App.css';
// 결과 전송
export const ResultContext = createContext();

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const [resultCountries, setResultCountries] = useState([]); //  필터링된 나라
  const [resultHPIRank, setResultHPIRank] = useState([]); //  HPI 등수
  const [resultAmount, setResultAmount] = useState([]); //  수치
  const [resultBigmacPrice, setResultBigmacPrice] = useState([]);
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  const saveResult = {
    resultCountries,
    setResultCountries,
    resultHPIRank,
    setResultHPIRank,
    resultAmount,
    setResultAmount,
    resultBigmacPrice,
    setResultBigmacPrice,
  };

  const fetchCurrentUser = async () => {
    // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
    const getToken = JSON.parse(window.sessionStorage.getItem('getToken'));
    axios
      .post('http://localhost:5001/users/auth/kakao', {
        accessToken: getToken,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        console.log(data.userInfo);
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: data.userInfo,
        });
      });
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <ResultContext.Provider value={saveResult}>
            <Router>
              <Routes>
                <Route path="/main" element={<Home />} />
                <Route path="/cityinfo" element={<CityInfo />} />
                <Route path="/allcities" element={<AllCities />} />
                <Route path="/mainsurvey" element={<MainSurvey />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Router>
          </ResultContext.Provider>
        </UserStateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
