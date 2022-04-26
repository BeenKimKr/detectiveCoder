import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CityInfo from './pages/cityInfo/CityInfo';
import Home from './pages/Home';
import MainSurvey from './pages/MainSurvey';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/cityinfo" element={<CityInfo />} />
          <Route path="/mainsurvey" element={<MainSurvey />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
