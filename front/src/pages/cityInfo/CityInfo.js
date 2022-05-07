import React, { useState, useContext, useEffect } from 'react';
import WeatherChart from '../../components/charts/WeatherChart';
import Bigmac from '../../components/charts/Bigmac';
import RadarChart from '../../components/charts/RadarChart';
import KakaoShareButton from '../../components/KakaoShare';
import Comment from '../comment.js/Comment';
import Nav from '../../components/Nav/Nav';
import { ResultContext, UserStateContext } from '../../App';

import * as Api from '../../api';

import './style.css';

// 나라(도시) 결과 보여주는 페이지
const CityInfo = () => {
  const [name, setName] = useState('명탐정');
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [idx, setIdx] = useState(0);
  const [userToken, setUserToken] = useState(window.sessionStorage.userToken);
  console.log(userToken);
  const {
    resultCountries,
    resultHPIRank,
    setResultHPIRank,
    resultAmount,
    setResultAmount,
    resultBigmacPrice,
    setResultBigmacPrice,
  } = useContext(ResultContext);

  const userState = useContext(UserStateContext);

  useEffect(() => {
    if (window.sessionStorage.userToken) {
      setName(userState.user.name);
      console.log(userState);
    }
  }, [userState]);

  const flagUrl1st = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[0].Ab}-flag.gif`;
  const flagUrl2nd = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[1].Ab}-flag.gif`;
  const flagUrl3rd = `https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${resultCountries[2].Ab}-flag.gif`;

  const handleClick = async (e) => {
    setIdx(e.target.name);

    const country = resultCountries[e.target.name].Country;
    const city = resultCountries[e.target.name].City;
    const rank = await Api.get(`country/rank/${country}`);
    const amount = await Api.get(`country/one/${city}`);
    const bigmacPrice = await Api.get(`country/price/${country}`);

    setResultHPIRank(rank.data);
    setResultAmount(amount.data);
    setResultBigmacPrice(bigmacPrice.data);
  };

  return (
    <div className="container flex-col p-2.5 bg-clouds">
      <Nav userToken={userToken} />
      {/* true에  설문조사를 하고 나온 결과인지 아닌지를 구분하는 조건 넣어줘야 함*/}
      {true ? (
        <div>
          <span className="flex text-xl lg:text-3xl font-bold ml-6 font-noto">
            {name}님께{' '}
            {resultCountries[idx].Country === resultCountries[idx].City ? (
              <p className="inputCity text-xl lg:text-3xl font-fred mx-2">
                {resultCountries[idx].Country}
              </p>
            ) : (
              <p className="inputCity text-xl lg:text-3xl font-fred mx-2">
                {resultCountries[idx].Country}-{resultCountries[idx].City}
              </p>
            )}
            을(를) 추천합니다.
          </span>
        </div>
      ) : (
        <></>
      )}
      <div>
        <div className="flex m-28 mx-auto justify-center">
          <img
            className="absolute w-96"
            src="/imgs/victoryStand.png"
            alt="시상대"
          />
          <img
            name="1"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '-20px', top: '-40px' }}
            src={flagUrl2nd}
            alt="2등 국기"
            onClick={handleClick}
            title={
              resultCountries[1].Country === resultCountries[1].City
                ? resultCountries[1].Country
                : `${resultCountries[1].Country}-${resultCountries[1].City}`
            }
          />
          <img
            name="0"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '-5px', top: '-75px' }}
            src={flagUrl1st}
            alt="1등 국기"
            onClick={handleClick}
            title={
              resultCountries[0].Country === resultCountries[0].City
                ? resultCountries[0].Country
                : `${resultCountries[0].Country}-${resultCountries[0].City}`
            }
          />
          <img
            name="2"
            className="w-28 h-28 rounded-full relative flagHover cursor-pointer shadow-xl"
            style={{ left: '0px', top: '-20px' }}
            src={flagUrl3rd}
            alt="3등 국기"
            onClick={handleClick}
            title={
              resultCountries[2].Country === resultCountries[2].City
                ? resultCountries[2].Country
                : `${resultCountries[2].Country}-${resultCountries[2].City}`
            }
          />
        </div>
      </div>
      <div className="flex flex-col mb-16 font-noto text-2xl">
        <div className="flex justify-center text-5xl mb-4 font-irop">
          {resultCountries[idx].Country === resultCountries[idx].City
            ? resultCountries[idx].Country
            : `${resultCountries[idx].Country}-${resultCountries[idx].City}`}
        </div>
        <div className="flex justify-center mx-32 lg:mx-64">
          {resultCountries[idx].Country === resultCountries[idx].City
            ? resultCountries[idx].Country
            : `${resultCountries[idx].Country}-${resultCountries[idx].City}`}{' '}
          의 연평균 최소 기온은 {resultAmount.min.toFixed(0)}°C, 최대 기온은{' '}
          {resultAmount.max.toFixed(0)}°C로 평균 {resultAmount.mean.toFixed(0)}
          °C입니다. 6가지(자유 - {resultHPIRank.Freedom}위, GDP -{' '}
          {resultHPIRank.GDP}위, 관용 - {resultHPIRank.Generosity}위, 기대수명 -{' '}
          {resultHPIRank.HLE}위, 부정부패 - {resultHPIRank.corruption}위, 사회적
          지지 - {resultHPIRank.socialSupport}위) 항목을 토대로 68개국 중{' '}
          {resultHPIRank.score}위에 해당하는 행복지수를 갖는 나라입니다.
        </div>
      </div>

      {checkSubmit ? (
        ''
      ) : (
        <div className="flex justify-center mb-4">
          <Comment setCheckSubmit={setCheckSubmit} />
        </div>
      )}

      <div className={'flex flex-col' + (userToken ? '' : ' blur-sm')}>
        <div className="flex justify-center">
          <WeatherChart resultAmount={resultAmount} />
        </div>
        <div className="flex justify-center mb-8">
          <RadarChart resultAmount={resultAmount} />
        </div>
        <div className="flex justify-center">
          <Bigmac resultBigmacPrice={resultBigmacPrice} />
        </div>
      </div>
      <div className="flex space-x-4 justify-end">
        {/* <Button text='저장하기' type='main' onClick={handleSaveCountry} /> */}

        {/* <Button className='downBtn' text='다운로드' onClick={onDownloadBtn} /> */}
        <KakaoShareButton />
      </div>
    </div>
  );
};

export default CityInfo;
