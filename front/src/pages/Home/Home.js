import React, { useState } from 'react';
import Navmain from '../../components/Nav/Navmain';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import Badge from '../../components/badge/Badge';
import video from './Clouds.mp4';
const Home = () => {
  // const navigate = useNavigate();
  const [login, setLogin] = useState(true);

  // get  : ex ) Save

  return (
    <div className="container flex-col  ">
      <div class="bg">
        <Navmain />
        {login ? (
          <div className="mt-32 ml-32">{/* Save.map((it) => <Badge>) */}</div>
        ) : (
          <>
            <div className="TextBtnContainer">
              <div className="TextContainer">
                <span className="text">당신과 맞는 나라를 찾아보세요!</span>
              </div>
              <div>
                <button type="button" onclick="#">
                  Click!!
                </button>
              </div>
            </div>
            <div>
              <video muted autoPlay loop>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
