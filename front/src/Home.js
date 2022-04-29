import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const f = () => {
    navigate('/mypage');
  };
  return (
    <div>

      
      <button onClick={f}>버튼</button>
    </div>
  );
};

export default Home;
