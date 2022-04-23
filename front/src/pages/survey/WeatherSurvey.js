import React from 'react';

const WeatherSurvey = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <p>날씨 페이지</p>
        <div>
          <div className="grid grid-cols-4 gap-4">
            <button>
              <img src={process.env.PUBLIC_URL + '/imgs/spring.png'} />
            </button>
            <button>
              <img src={process.env.PUBLIC_URL + '/imgs/summer.png'} />
            </button>
            <button>
              <img src={process.env.PUBLIC_URL + '/imgs/autumn.png'} />
            </button>
            <button>
              <img src={process.env.PUBLIC_URL + '/imgs/winter.png'} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherSurvey;
