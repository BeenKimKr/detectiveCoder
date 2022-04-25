import React from 'react';
import '../Button/style.css';

const CommonButton = ({ text, type, onClick }) => {
  const btnType = ['main', 'serve'].includes(type) ? type : 'main';
  return (
    <button className={['myBtn', `btn-${btnType}`].join(' ')} onClick={onClick}>
      {text}
    </button>
  );
};
export default CommonButton;
