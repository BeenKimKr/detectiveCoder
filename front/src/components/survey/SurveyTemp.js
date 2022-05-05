import React, { useState, useContext } from 'react';
import { SaveAnswersContext, PercentContext } from '../../pages/MainSurvey';
import { WEATHER } from './text/WEATHER';

const SurveyTemp = () => {
  const { setTemp, temp } = useContext(SaveAnswersContext);
  const { setStep } = useContext(PercentContext);

  const onClick = (e) => {
    setTemp(e.target.value);
    setStep(1);
  };

  return (
    <>
      <div className='RangeContainer'>
        <div className='tempText'>
          <span className='font-fred'>
            외출할 때 어떤 옷을 입고 싶나요? 👚🧣
          </span>
        </div>
        <div className='InfoContainer'>
          {WEATHER.map((it, index) => (
            <>
              <button
                className={`InfoCard ${it.color}`}
                key={index}
                value={it.avg}
                onClick={onClick}
              >
                <div className='InfoTempContainer'>
                  <p className='InfoTempText'>{it.name}</p>
                  <p className='InfoTempText'>{it.description}</p>
                </div>
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SurveyTemp;
