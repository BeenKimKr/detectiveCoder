import React from 'react';
import { useNavigate } from 'react-router-dom';
import Kakao from '../components/Kakao/Login';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='container flex-col h-screen w-screen '>
      <Kakao />
    </div>
  );
};

export default Home;
