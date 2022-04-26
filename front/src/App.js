import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CityInfo from './pages/cityInfo/CityInfo';
import AllCities from './pages/allCities/AllCities';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cityinfo' element={<CityInfo />} />
          <Route path='/allcities' element={<AllCities />} />
          <Route path='*' element={<CityInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
