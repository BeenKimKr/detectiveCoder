import React from 'react';
import WeatherAverageChart from '../components/charts/WeatherAverageChart';
import CommonButton from '../components/commonButton/CommonButton';

const CityInfo = () => {
  return (
    <div style={{ width: '700px', height: '500px' }}>
      <WeatherAverageChart />
      <CommonButton text={'수정하기'} onClick={{}} />
    </div>
  );
};

export default CityInfo;
