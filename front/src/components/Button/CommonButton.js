import React from 'react';
import './style.css';

const CommonButton = ({ text, type, onClick, disabled }) => {
  // 버튼
  const btnType = ['main', 'sub'].includes(type) ? type : 'main';
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
