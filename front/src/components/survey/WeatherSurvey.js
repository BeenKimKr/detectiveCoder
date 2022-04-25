import React, { useContext } from 'react';
import { SaveAnswersContext } from '../../pages/MainSurvey';

const WeatherSurvey = () => {
  const { setDisabled, setData } = useContext(SaveAnswersContext);

  const clickWeather = (e) => {
    setData(e.currentTarget.name);
    setDisabled(false);
  };

  return (
    <>
      <div className="Weather">
        <p>설문을 시작하기 전! 선호하는 계절을 선택해주세요😊</p>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="WeatherCard-spring "
            name="spring"
            onClick={clickWeather}
          >
            <img src={process.env.PUBLIC_URL + '/imgs/spring.png'} />
          </button>
          <button
            className="WeatherCard-summer"
            name="summer"
            onClick={clickWeather}
          >
            <img src={process.env.PUBLIC_URL + '/imgs/summer.png'} />
          </button>
          <button
            className="WeatherCard-autumn"
            name="autumn"
            onClick={clickWeather}
          >
            <img src={process.env.PUBLIC_URL + '/imgs/autumn.png'} />
          </button>
          <button
            className="WeatherCard-winter "
            name="winter"
            onClick={clickWeather}
          >
            <img src={process.env.PUBLIC_URL + '/imgs/winter.png'} />
          </button>
        </div>
      </div>
    </>
  );
};
export default WeatherSurvey;
