import React, { useState } from 'react';
import Nav from '../../components/Nav';
import ReactTooltip from 'react-tooltip'; // yarn add react-tooltip

import './style.css';

import MapChart from '../../components/MapChart';

const AllCities = () => {
  const [content, setContent] = useState('');
  return (
    <div>
      <Nav />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
};

export default AllCities;
