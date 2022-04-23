import React, { useState } from 'react';
// import Nav from '../components/Nav';
import WealChart from '../components/charts/WealChart';
import Button from '@material-tailwind/react/Button';

const CityInfo = () => {
  const [name, setName] = useState('김나연');
  const [country, setCountry] = useState('독일');
  const [city, setCity] = useState('베를린');

  return (
    <>
      {/* <Nav /> */}
      <div>
        {name}님께 {country}-{city}을(를) 추천합니다.
      </div>
      <div>
        <img src='../../public/GermanyFlag.png' alt='국기 사진' />
        <div>
          `우리 {country}은(는)요 150여개 국가 중 행복순위는 30번째구요.`
        </div>
      </div>
      <div>{/* 나연님 차트 */}</div>
      <div>
        {/* 예솔님 차트 */}
        <WealChart />
      </div>
      <div>
        <button>비슷한 도시 보기</button>
        <button>저장하기</button>
      </div>
    </>
  );
};

export default CityInfo;
