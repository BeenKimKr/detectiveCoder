import React, { useRef } from 'react';
// import './card.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import CityInfo from './CityInfo';

const Card = () => {
  const cardRef = useRef();
  const onDownloadBtn = () => {
    const card = cardRef.current;
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, 'card.jpg');
    });
  };

  return (
    <div ref={cardRef} className="card">
      <button className="downBtn" onClick={onDownloadBtn}>
        결과저장
      </button>
    </div>
  );
};

export default Card;
