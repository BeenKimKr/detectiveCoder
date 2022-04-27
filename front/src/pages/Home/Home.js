import React from 'react';
import Navmain from '../../components/Nav/Navmain';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import video from './Clouds.mp4';
const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className='container flex-col '>
      <div class='bg'>
        <video muted autoPlay loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div>
        <Navmain />

        <text class='text'>
          <p>당신과 맞는 나라를 찾아보세요!</p>
        </text>

        <button class='button'>on</button>
      </div>
    </div>
  );
};

export default Home;
