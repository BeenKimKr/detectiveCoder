import React, { useState, useContext } from 'react';
import Navmain from '../../components/Nav/Navmain';
import WealChart from '../../components/charts/WealChart';
import Button from '../../components/btn/CommonButton';
import Image from '@material-tailwind/react/Image';
import WeatherChart from '../../components/charts/WeatherChart';
import HPIChart from '../../components/charts/HPIChart';
import Bigmac from '../../components/charts/Bigmac';

import './style.css';
import { ResultContext } from '../../App';

const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [country, setCountry] = useState('독일');

  const {
    resultCountries,
    setResultCountries,
    resultHPIRank,
    setResultHPIRank,
    resultAmount,
    setResultAmount,
  } = useContext(ResultContext);

  console.log('cityInfo');
  console.log(resultCountries);
  console.log(resultHPIRank);
  console.log(resultAmount);

  return (
    <div className='container flex-col p-2.5'>
      <Navmain />
      <div className=" my-8">
        <span className="title">
          {name}님께
          <p className="inputCity">{country}</p>
          을(를) 추천합니다.
        </span>
      </div>
      <div className='flex flex-row'>
        <div className=''>
          <Image
            className="w-64 h-64 rounded-full shadow-lg"
            // https://${process.env.AWS_S3_BUCKET}.s3.${AWS_REGION}.amazonaws.com/flags_img/
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png"
            rounded={true}
            raised={false}
            alt="국기 사진"
          />
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
      <div className="flex space-x-4 justify-end">
        <Button text="비슷한 나라 보기" type="serve" />
        <Button text="저장하기" type="main" />
      </div>
    </div>
  );
};

export default CityInfo;
