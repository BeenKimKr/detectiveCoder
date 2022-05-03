import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import ReactTooltip from 'react-tooltip'; // yarn add react-tooltip
import Image from '@material-tailwind/react/Image';
import './style.css';

import MapChart from '../../components/MapChart';

const AllCities = () => {
  const [content, setContent] = useState('');
  return (
    <div className='container h-screen w-screen'>
      <Nav />
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip place='right'>
        {content}
        <Image
          className='w-64 h-64 rounded-full shadow-lg'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png'
          rounded={true}
          raised={false}
          alt='국기 사진'
        />
      </ReactTooltip>
    </div>
  );
};

export default AllCities;
