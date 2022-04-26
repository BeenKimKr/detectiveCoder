import React from 'react';
import Nav from '../../components/Nav/Nav';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import video from './Clouds.mp4';
const Home = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div class='bg'>
        <video muted autoPlay>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    </div>
  );
};

export default Home;
