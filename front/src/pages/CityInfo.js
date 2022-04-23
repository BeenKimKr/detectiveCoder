import React, { useState } from 'react';
// import Nav from '../components/Nav';
import WealChart from '../components/charts/WealChart';
import Button from '../components/Button';
import Image from '@material-tailwind/react/Image';
import WeatherChart from '../components/charts/WeatherChart';
import HPIChart from '../components/charts/HPIChart';
const CityInfo = () => {
  const [name, setName] = useState('김나연');
  const [country, setCountry] = useState('독일');
  const [city, setCity] = useState('베를린');

  return (
    <div className='container w-screen flex-col h-screen'>
      {/* <Nav /> */}
      <div className='space-y-4'>
        {name}님께 {country}-{city}을(를) 추천합니다.
      </div>
      <div className='space-y-4 flex flex-row '>
        <Image
          className='basis-1/2'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
          rounded={true}
          raised={false}
          alt='국기 사진'
        />

        <div className='basis-1/2'>
          우리 {country}은(는)요 150여개 국가 중 행복순위는 30번째구요.
        </div>
      </div>
      <div className='space-y-4' style={{ width: '700px', height: '500px' }}>
        <div style={{ width: '500px', height: '300px' }}>
          <WeatherChart />
        </div>
        <div style={{ width: '500px', height: '300px' }}>
          <HPIChart />
        </div>
      </div>
      <div className='flex flex-row'>
        <WealChart className='basis-1/2' />
        {/* 예솔님 차트 */}
        <WealChart className='basis-1/2' />
      </div>
      <div className='flex space-x-4 justify-end'>
        <Button text='비슷한 나라 보기' type='serve' />
        <Button text='저장하기' type='main' />
      </div>
    </div>
  );
};

export default CityInfo;
