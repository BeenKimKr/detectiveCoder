import React from 'react';
import './style.css';

const Badge = (fileName) => {
  return (
    <div className='badgeCard'>
      <div>
        <img
          src='https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/US-flag.gif'
          className='badgeImage'
        />
        <div className='textContainer'>
          <span className='text'>나라이름</span>
        </div>
      </div>
    </div>
  );
};

export default Badge;
