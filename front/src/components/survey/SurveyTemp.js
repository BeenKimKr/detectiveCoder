import React, { useState, useContext } from 'react';
import CommonButton from '../btn/CommonButton';
import { SaveAnswersContext, PercentContext } from '../../pages/MainSurvey';
import { WEATHER } from './text/WEATHER';

const SurveyTemp = () => {
  const [open, setOpen] = useState(false);
  const { setTemp, temp } = useContext(SaveAnswersContext);
  const { setStep } = useContext(PercentContext);

  const onTempChange = (e) => {
    setTemp(e.target.value);
  };

  const onClick = () => {
    setStep(1);
  };

  return (
    <>
      <div className="RangeContainer">
        <CommonButton
          type={'temp'}
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
                  <div className={`InfoCard ${it.color}`} key={index}>
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
          <span className="ExplainText">
            선호하는 평균기온을 선택해주세요.😊 <br /> 선호하는 평균기온을
            고려하여 어울리는 나라를 추천해드립니다.
          </span>
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
          <CommonButton text={`${temp}도 선택`} onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default SurveyTemp;
