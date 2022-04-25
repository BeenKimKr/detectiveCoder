// 설문조사 페이지
import React, { useState, createContext, useReducer } from 'react';
import CommonButton from '../components/Button/CommonButton';
import SurveyContainer from '../components/survey/SurveyContainer';
import WeatherSurvey from '../components/survey/WeatherSurvey';

export const SaveAnswersContext = createContext();
export const PagesContext = createContext();

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
  const [data, setData] = useState('');
  const [answer, answerDispatch] = useReducer(reducer, []);
  const [pages, setPages] = useState(20);
  const [disabled, setDisabled] = useState(true);
  const saveAnswers = { setDisabled, data, setData };
  const changePage = { setPages };

  const onClick = () => {
    answerDispatch({ type: 'INPUT', data: data });
    setPages(40);
    setDisabled(true);
  };

  return (
    <div className="container w-screen flex-col h-screen">
      <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
          style={{ width: `${pages}%` }}
        ></div>
      </div>
      <div className="mt-60 mx-0">
        <PagesContext.Provider value={changePage}>
          <SaveAnswersContext.Provider value={saveAnswers}>
            {pages === 20 ? <WeatherSurvey /> : <SurveyContainer />}
          </SaveAnswersContext.Provider>
        </PagesContext.Provider>
      </div>
      {pages === 20 && (
        <div className="mt-6 float-right">
          <CommonButton
            text={'확인'}
            type={'serve'}
            onClick={onClick}
            disabled={disabled}
          />
        </div>
      )}
    </div>
  );
};

export default MainSurvey;
