import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home2 from './pages/Home/Home2';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';
import Login from './components/Kakao/KakaoLogin';

import AllCities from './pages/allCities/AllCities';
import * as Api from './api';
import './App.css';

// export const ModalStateContext = createContext(null);

function App() {
  // // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const changeModal = { modalOpen, setModalOpen, openModal, closeModal };

  return (
    <>
      {/* <ModalStateContext.Provider value={changeModal}> */}
      <Router>
        <Routes>
          <Route path='/main' element={<Home2 />} />
          <Route path='/cityinfo' element={<CityInfo />} />
          <Route path='/allcities' element={<AllCities />} />
          <Route path='/mainsurvey' element={<MainSurvey />} />
          <Route path='/users/kakao/callback' element={<Login />} />
          <Route path='*' element={<Home2 />} />
        </Routes>
      </Router>
      {/* </ModalStateContext.Provider> */}
    </>
  );
}

export default App;
