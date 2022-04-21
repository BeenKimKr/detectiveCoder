import React, { useState, useEffect, useReducer, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Home from './Home'
import Portfolio from './Portfolio'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mypage" exact element={<Portfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
