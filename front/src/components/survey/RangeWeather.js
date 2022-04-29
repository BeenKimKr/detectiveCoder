import React from 'react';
import RangeSlider from 'reactrangeslider';

// value={ start: 20, end: 80 }
const RangeWeather = (value, onChange) => {
  return (
    <div>
      <RangeSlider
        value={value}
        onChange={onChange}
        min={20}
        max={100}
        step={5}
      />
    </div>
  );
};

export default RangeWeather;
