import React, { useState, useContext } from 'react';
import CommonButton from '../button/CommonButton';
import { SaveAnswersContext, PercentContext } from '../../pages/MainSurvey';
import { WEATHER } from './text/WEATHER';

const SurveyTemp = () => {
  const [temp, setTemp] = useState(24);
  const [open, setOpen] = useState(false);
  const { answerDispatch } = useContext(SaveAnswersContext);
  const { setStep } = useContext(PercentContext);

  const onTempChange = (e) => {
    setTemp(e.target.value);
  };

  const onClick = () => {
    answerDispatch({ type: 'INPUT', data: temp });
    setStep(1);
  };

  return (
    <>
      <div className="RangeContainer">
        <CommonButton
          text={'기온별 옷차림이 궁금하다면? 🔎'}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="InfoContainer">
          {open && (
            <>
              {WEATHER.map((it, index) => (
                <>
                  <div className="InfoCard" key={index}>
                    <div className="InfoTempContainer">
                      <p className="InfoTempText">{it.name}</p>
                    </div>
                    <div className="InfoDescriptionContainer">
                      <p className="InfoDescriptionText">{it.description}</p>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
        <div className="TextContainer">
          <div className="ExplainText">선호하는 평균기온을 선택해주세요.😊</div>
          <div className="TempText">
            <p>{temp}</p>
          </div>
        </div>
        <input
          type="range"
          className="RangeBar"
          min="0"
          max="24"
          step="0.1"
          onChange={onTempChange}
        />
        <div className="TextBtn">
          <CommonButton text={'시작하기!'} onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default SurveyTemp;
