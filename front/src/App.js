import React, { useState, useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';
import { loginReducer } from './reducer';
// import RedirectKakao from './components/Kakao/RedirectKakao';

import AllCities from './pages/allCities/AllCities';
import * as Api from './api';
import './App.css';

export const ResultContext = createContext();

function App() {
  const [resultCountries, setResultCountries] = useState([]); //  필터링된 나라
  const [resultHPIRank, setResultHPIRank] = useState([]); //  HPI 등수
  const [resultAmount, setResultAmount] = useState([]); //  수치

  const [user, setUser] = useState([]);

  const saveResult = {
    // resultCountries,
    // setResultCountries,
    // resultHPIRank,
    // setResultHPIRank,
    // resultAmount,
    // setResultAmount,
    user,
    setUser,
  };

  return (
    <>
      <ResultContext.Provider value={saveResult}>
        <Router>
          <Routes>
            <Route path='/main' element={<Home />} />
            <Route path='/cityinfo' element={<CityInfo />} />
            <Route path='/allcities' element={<AllCities />} />
            <Route path='/mainsurvey' element={<MainSurvey />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </Router>
      </ResultContext.Provider>
    </>
  );
}

export default App;
