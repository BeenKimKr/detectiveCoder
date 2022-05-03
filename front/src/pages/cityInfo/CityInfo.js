import React, { useState } from 'react';
import Navmain from '../../components/Nav/Navmain';
import WealChart from '../../components/charts/WealChart';
import Button from '../../components/btn/CommonButton';
import Image from '@material-tailwind/react/Image';
import WeatherChart from '../../components/charts/WeatherChart';
import HPIChart from '../../components/charts/HPIChart';
import Bigmac from '../../components/charts/Bigmac';

import './style.css';

const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [country, setCountry] = useState('독일');

  return (
    <div className='container flex-col p-2.5'>
      <Navmain />
      <div className=' my-8'>
        <span className='title'>
          {name}님께
          <p className='inputCity'>{country}</p>
          을(를) 추천합니다.
        </span>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-center'>
          <img
            className='w-24 h-24 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
            alt='2등 국기'
          />
          <img
            className='w-24 h-24 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
            alt='1등 국기'
          />
          <img
            className='w-24 h-24 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
            alt='3등 국기'
          />
        </div>
        <div className='w-9/12'>
          <div className='flex justify-center'>
            <img src='/imgs/victoryStand.png' alt='시상대' />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='mb-3 lg:basis-1/2 flex items-center justify-center'>
          <WeatherChart />
        </div>
        <div className='lg:basis-1/2 flex justify-center items-center'>
          <HPIChart />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row '>
        <div className='lg:basis-1/2 flex justify-center'>
          <Bigmac />
        </div>
        <div className='lg:basis-1/2 flex justify-center'>
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
