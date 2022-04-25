import React from 'react';

const WeatherSurvey = () => {
  return (
    <>
      <div className="Weather">
        <h3>사용자가 선호하는 계절 선택 컴포넌트</h3>
        <div className="grid grid-cols-4 gap-4">
          <button className="WeatherCard ">
            <img src={process.env.PUBLIC_URL + '/imgs/spring.png'} />
          </button>

          <button className="WeatherCard ">
            <img src={process.env.PUBLIC_URL + '/imgs/summer.png'} />
          </button>

          <button className="WeatherCard ">
            <img src={process.env.PUBLIC_URL + '/imgs/autumn.png'} />
          </button>

          <button className="WeatherCard ">
            <img src={process.env.PUBLIC_URL + '/imgs/winter.png'} />
          </button>
        </div>
      </div>
    </>
  );
};
export default WeatherSurvey;
