import React from 'react';
import './style.css';

const Badge = (fileName) => {
  return (
    <div>
      <div className="textContainer">
        <span className="text">나라이름</span>
      </div>
      <img
        src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${fileName}-flag.gif`}
        className="badgeImage"
      />
    </div>
  );
};

export default Badge;
