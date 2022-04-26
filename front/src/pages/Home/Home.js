import React from 'react';
import Navbar from '../../components/Nav/Navbar';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import video from './Clouds.mp4';
const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className='container w-screen flex-col h-screen'>
      <div class='bg'>
        <video muted autoPlay loop>
          <source src={video} type='video/mp4' />
        </video>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
