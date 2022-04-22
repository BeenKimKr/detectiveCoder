import React, { useState, useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
