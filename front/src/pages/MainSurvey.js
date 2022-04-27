// 설문조사 페이지
import React, { useState, createContext, useReducer, useEffect } from 'react';
import CommonButton from '../components/Button/CommonButton';
import SurveyContainer from '../components/survey/SurveyContainer';
import WeatherSurvey from '../components/survey/WeatherSurvey';

export const SaveAnswersContext = createContext();
export const PercentContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT': {
      return [...state, action.data];
    }
    default:
      return state;
  }
};

const MainSurvey = () => {
  const [answer, answerDispatch] = useReducer(reducer, []);
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const saveAnswers = {
    answerDispatch,
    answer,
  };
  const changePercent = { percent, setPercent, step, setStep };

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  return (
    <div className="container w-screen h-screen  ">
      <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="m-auto ">
        <PercentContext.Provider value={changePercent}>
          <SaveAnswersContext.Provider value={saveAnswers}>
            {percent === 0 ? <WeatherSurvey /> : <SurveyContainer />}
          </SaveAnswersContext.Provider>
        </PercentContext.Provider>
      </div>
    </div>
  );
};

export default MainSurvey;
