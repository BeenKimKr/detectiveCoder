import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainSurvey from '../MainSurvey';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import video from './Clouds.mp4';
const Home = () => {
  // const navigate = useNavigate();
  return (
    <div className='container flex-col '>
      <div className='bg'>
        <Nav />
        <div className='TextBtnContainer'>
          <div className='TextContainer'>
            <span className='text'>당신과 맞는 나라를 찾아보세요!</span>
          </div>
          <div className='button'>
            <button type='button' onClick={MainSurvey}>
              Click!!
            </button>
          </div>
        </div>
        <div>
          <video muted autoPlay loop>
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
