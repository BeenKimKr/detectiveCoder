import React from 'react';
import { useNavigate } from 'react-router-dom';
import Kakao from '../components/Kakao/Login';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container flex-col h-screen w-screen '>
      <Kakao />
      <button onClick={() => navigate('/mainsurvey')}>설문조사페이지로!</button>
      <button onClick={() => navigate('/cityinfo')}>설문조사페이지로!</button>
    </div>
  );
};

export default Home;
