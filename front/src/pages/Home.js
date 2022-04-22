import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(`/cityInfo`);
  };
  return (
    <>
      <button onClick={onClickBtn}>결과페이지로</button>
    </>
  );
};

export default Home;
