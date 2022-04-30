import React from 'react';
import './style.css';

const CommonButton = ({ text, type, onClick, disabled }) => {
  const btnType = ['main', 'sub', 'temp'].includes(type) ? type : 'main';
  return (
    <button
      className={['myBtn', `btn-${btnType}`].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default CommonButton;
