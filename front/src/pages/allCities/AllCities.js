import React, { useState } from 'react';
import Navmain from '../../components/Nav/Navmain';
import ReactTooltip from 'react-tooltip'; // yarn add react-tooltip
import Image from '@material-tailwind/react/Image';
import './style.css';

import MapChart from '../../components/MapChart';

const AllCities = () => {
  const [content, setContent] = useState('');
  return <div className="container h-screen w-screen"></div>;
};

export default AllCities;
