import React from 'react';
import WeatherChart from '../components/charts/WeatherChart';
import HPIChart from '../components/charts/HPIChart';

const CityInfo = () => {
  return (
    <>
      <div style={{ width: '500px', height: '300px' }}>
        <WeatherChart />
      </div>
      <div style={{ width: '500px', height: '300px' }}>
        <HPIChart />
      </div>
    </>
  );
};

export default CityInfo;
