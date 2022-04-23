import React, { useState } from 'react';
import Nav from '../components/Nav';
import WealChart from '../components/charts/WealChart';
import Button from '../components/Button';
import Image from '@material-tailwind/react/Image';
import WeatherChart from '../components/charts/WeatherChart';
import HPIChart from '../components/charts/HPIChart';

const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [country, setCountry] = useState('독일');
  const [city, setCity] = useState('베를린');

  return (
    <div className='container w-screen flex-col h-screen'>
      <Nav />
      <div>
        <span className='text-lg'>
          {name}님께 {country}-{city}을(를) 추천합니다.
        </span>
      </div>
      <div className='flex flex-row'>
        <Image
          className='w-24 h-24 rounded-full shadow-lg'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
          rounded={true}
          raised={false}
          alt='국기 사진'
        />

        <div className='basis-1/2'>
          우리 {country}은(는)요 150여개 국가 중 행복순위는 30번째구요.
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='basis-1/2 flex items-center justify-center'>
          <WeatherChart />
        </div>
        <div className='basis-1/2 flex justify-center items-center'>
          <HPIChart />
        </div>
      </div>
      <div className='flex flex-row '>
        {/* 예솔님 차트 */}
        <div className='basis-1/2 flex justify-center'>
          <WealChart />
        </div>
        <div className='basis-1/2 flex justify-center'>
          <WealChart />
        </div>
      </div>
      <div className='flex space-x-4 justify-end'>
        <Button text='비슷한 나라 보기' type='serve' />
        <Button text='저장하기' type='main' />
      </div>
    </div>
  );
};

export default CityInfo;
