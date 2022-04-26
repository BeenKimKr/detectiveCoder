import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CityInfo from './pages/cityInfo/CityInfo';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/cityinfo' element={<CityInfo />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<CityInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
