import React, { useState } from 'react';
import Nav from '../../components/Nav';
import WealChart from '../../components/charts/WealChart';
import Button from '../../components/Button/CommonButton';
import Image from '@material-tailwind/react/Image';
import WeatherChart from '../../components/charts/WeatherChart';
import HPIChart from '../../components/charts/HPIChart';
import Bigmac from '../../components/charts/Bigmac';

import './style.css';

const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [country, setCountry] = useState('독일');
  const [city, setCity] = useState('베를린');

  return (
    <div className="container w-screen flex-col h-screen">
      <Nav />
      <div className=" my-8">
        <span className="title">
          {name}님께
          <p className="inputCity">
            {country}-{city}
          </p>
          을(를) 추천합니다.
        </span>
      </div>
      <div className="flex flex-row">
        <div className="my-8">
          <Image
            className="w-64 h-64 rounded-full shadow-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png"
            rounded={true}
            raised={false}
            alt="국기 사진"
          />
        </div>
        <div className="cityInfo">
          우리 {country}은(는)요, 150여개 국가 중 행복순위는 30번째구요.
          <br />
          1인당 GDP 13위!
          <br />
          사회적 지원 49위
          <br />
          건강수명 20위
          <br />
          선택자유 54위
          <br />
          관용 54위
          <br />
          부패 127위
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2 flex items-center justify-center">
          <WeatherChart />
        </div>
        <div className="basis-1/2 flex justify-center items-center">
          <HPIChart />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="basis-1/2 flex justify-center">
          <Bigmac />
        </div>
        <div className="basis-1/2 flex justify-center">
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
