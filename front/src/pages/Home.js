import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const f = () => {
    navigate('/cityInfo');
  };
  return (
    <div>
      <button onClick={f}>결과페이지 버튼</button>
    </div>
  );
};

export default Home;
