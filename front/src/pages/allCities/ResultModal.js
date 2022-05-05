import React, { useContext } from 'react';
import Bigmac from '../../components/charts/Bigmac';
import HPIChart from '../../components/charts/HPIChart';
import './style.css';

const ResultModal = (props) => {
  const { open, rank } = props;
  return <div className={open ? 'openModal modal' : 'modal'}></div>;
};

export default ResultModal;
