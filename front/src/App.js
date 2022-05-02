import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home2 from './pages/Home/Home2';
import CityInfo from './pages/cityInfo/CityInfo';
import MainSurvey from './pages/MainSurvey';
import Login from './components/Kakao/KakaoLogin';

import { useDispatch } from 'react-redux';

import AllCities from './pages/allCities/AllCities';
import * as Api from './api';
import './App.css';

// export const ModalStateContext = createContext(null);
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://localhost:3000/users/kakao/callback?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함

        history.replace("/home2") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

        })
        .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
        }

        )};


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
          <Route path='/users/kakao/callback' element={<KaKaoLogin />} />
          <Route path='*' element={<Home2 />} />
        </Routes>
      </Router>
      {/* </ModalStateContext.Provider> */}
    </>
  );
}

export default App;
