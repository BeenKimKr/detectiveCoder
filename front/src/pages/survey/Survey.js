// 설문조사 페이지
import React, { useState, createContext } from 'react';
import WeatherSurvey from './WeatherSurvey';
import ContinentsSurvey from './ContinentsSurvey';

export const SaveAnswersContext = createContext();
export const PagesContext = createContext();

const Survey = () => {
  const [answers, setAnswers] = useState([]);
  const [pages, setPages] = useState(0);
  const saveAnswers = { answers, setAnswers };
  const changePage = { setPages };

  console.log(pages);

  return (
    <div style={{ width: '300px', height: '500px' }}>
      <SaveAnswersContext.Provider value={saveAnswers}>
        <PagesContext.Provider value={changePage}>
          {pages === 0 ? <WeatherSurvey /> : <ContinentsSurvey />}
        </PagesContext.Provider>
      </SaveAnswersContext.Provider>
    </div>
  );
};

export default Survey;
