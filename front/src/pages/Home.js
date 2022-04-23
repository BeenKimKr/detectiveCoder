import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const f = () => {
    navigate('/cityInfo');
  };
  return (
    <div>
      <button onClick={f}>결과페이지 버튼</button>
    </div>
=======
  const onClickBtn = () => {
    navigate(`/cityInfo`);
  };
  return (
    <>
      <button onClick={onClickBtn}>결과페이지로</button>
    </>
>>>>>>> origin/fe_chart_ny
  );
};

export default Home;
