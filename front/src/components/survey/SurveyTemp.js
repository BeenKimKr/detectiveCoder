import React, { useState, useContext } from 'react';
import { SaveAnswersContext, PercentContext } from '../../pages/MainSurvey';
import { WEATHER } from './text/WEATHER';

const SurveyTemp = (props) => {
  const { open, close, setTempModal } = props;

  const { setTemp, temp } = useContext(SaveAnswersContext);
  const { setStep } = useContext(PercentContext);

  const onClick = (e) => {
    setTemp(e.currentTarget.value);
    setTempModal(false);
    setStep(1);
  };

  return (
    <>
      <div className={open ? 'openModal modal ' : 'modal'}>
        <section className="w-11/12">
          <div className="RangeContainer ">
            <div className="tempText flex">
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/imgs/premium-icon-temperature-2652881.png'
                }
                className="w-12 h-12 mt-4 mr-2"
              />
              <p className="font-jua object-cover text-xl text-custom-main text-left mt-3 mb-3 ">
                잠깐 외출할 때 어떤 옷을 입고 싶나요? <br />
                선호하는 기온을 결과에 반영합니다.
              </p>
            </div>
            <div className="InfoContainer">
              {WEATHER.map((it, index) => (
                <>
                  <button
                    className={`InfoCard ${it.color}`}
                    key={index}
                    value={it.avg}
                    onClick={onClick}
                  >
                    <div className="InfoTempContainer">
                      <p className="InfoTempText">{it.name}</p>
                      <p className="InfoTempText">{it.description}</p>
                    </div>
                  </button>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SurveyTemp;
