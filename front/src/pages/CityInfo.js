import React from 'react';
import WeatherChart from '../components/charts/WeatherChart';
import HPIChart from '../components/charts/HPIChart';
import Button from '../components/Button';

const CityInfo = () => {
  return (
    <>
      <div style={{ width: '500px', height: '300px' }}>
        <WeatherChart />
      </div>
      <div style={{ width: '500px', height: '300px' }}>
        <HPIChart />
      </div>
      <Button text={'test'} />
    </>
  );
};

export default CityInfo;
