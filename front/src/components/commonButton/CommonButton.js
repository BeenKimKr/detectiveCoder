import React from 'react';
import './Style.css';

const CommonButton = ({ text, type, onClick }) => {
  const btnType = ['blue', 'gray'].includes(type) ? type : 'white';
  return (
    <button className={['btn'`btn-${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};

export default CommonButton;
