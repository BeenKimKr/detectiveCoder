// 설문조사 페이지
import React, { useState, createContext } from 'react';
import CommonButton from '../components/Button/CommonButton';
import SurveyContainer from '../components/survey/SurveyContainer';
import WeatherSurvey from '../components/survey/WeatherSurvey';

export const SaveAnswersContext = createContext();
export const PagesContext = createContext();

const Survey = () => {
  const [answers, setAnswers] = useState([]);
  const [pages, setPages] = useState(20);
  const saveAnswers = { answers, setAnswers };
  const changePage = { setPages };

  return (
    <div className="container w-screen flex-col h-screen">
      <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
          style={{ width: `${pages}%` }}
        ></div>
      </div>
      <div className="mt-60">
        <PagesContext.Provider value={changePage}>
          <SaveAnswersContext.Provider value={saveAnswers}>
            {pages === 20 ? <WeatherSurvey /> : <SurveyContainer />}
          </SaveAnswersContext.Provider>
        </PagesContext.Provider>
      </div>
      <div className="mt-6 float-right">
        <CommonButton text={'확인'} />
      </div>
    </div>
  );
};

export default Survey;
