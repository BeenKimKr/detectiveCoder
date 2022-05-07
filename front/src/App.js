import React, { useState, useReducer, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loginReducer } from './reducer';
import Home from './pages/Home/Home';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';

import Team from './pages/Home/Teampage';
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
  const [deliverTemp, setDeliverTemp] = useState('');
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  const saveResult = {
    deliverTemp,
    setDeliverTemp,
    resultCountries,
    setResultCountries,
    resultHPIRank,
    setResultHPIRank,
    resultAmount,
    setResultAmount,
    resultBigmacPrice,
    setResultBigmacPrice,
  };

  const fetchCurrentUser = async (userToken) => {
    await Api.post('users/auth/kakao', {
      accessToken: userToken,
    }).then((res) => {
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
    const userToken = JSON.parse(window.sessionStorage.getItem('userToken'));
    if (userToken) {
      console.log('토큰존재');
      fetchCurrentUser(userToken);
    } else {
      console.log('토큰이없당');
    }
  }, []);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <ResultContext.Provider value={saveResult}>
            <Router>
              <Routes>
                <Route path='/main' element={<Home />} />
                <Route path='/cityinfo' element={<CityInfo />} />
                <Route path='/allcities' element={<AllCities />} />
                <Route path='/mainsurvey' element={<MainSurvey />} />
                <Route path='/team' element={<Team />} />
                <Route path='*' element={<Home />} />
              </Routes>
            </Router>
          </ResultContext.Provider>
        </UserStateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}

export default App;
