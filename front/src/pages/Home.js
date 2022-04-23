import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const onClickCityInfo = () => {
    navigate(`/cityInfo`);
  };

  const onClickSurvey = () => {
    navigate(`/survey`);
  };

  return (
    <>
      <button onClick={onClickCityInfo}>결과페이지로</button>
      <br />
      <button onClick={onClickSurvey}>설문조사페이지로</button>
    </>
  );
};

export default Home;
