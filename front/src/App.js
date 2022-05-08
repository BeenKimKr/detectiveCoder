import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';
import Team from './pages/Home/Teampage';
import AllCities from './pages/allCities/AllCities';
import * as Api from './api';
import './App.css';
import GuestBook from './pages/Home/GuestBook';
// 결과 전송
export const ResultContext = createContext();

function App() {
  const [resultCountries, setResultCountries] = useState([]); //  필터링된 나라
  const [resultHPIRank, setResultHPIRank] = useState([]); //  HPI 등수
  const [resultAmount, setResultAmount] = useState([]); //  수치
  const [resultBigmacPrice, setResultBigmacPrice] = useState([]);
  const [deliverTemp, setDeliverTemp] = useState('');

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

  return (
    <>
      <ResultContext.Provider value={saveResult}>
        <Router>
          <Routes>
            <Route path="/main" element={<Home />} />
            <Route path="/cityinfo" element={<CityInfo />} />
            <Route path="/allcities" element={<AllCities />} />
            <Route path="/mainsurvey" element={<MainSurvey />} />
            <Route path="/guestbook" element={<GuestBook />} />
            <Route path="/team" element={<Team />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </ResultContext.Provider>
    </>
  );
}

export default App;
