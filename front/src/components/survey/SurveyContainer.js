import React, { useState, useContext } from 'react';
import './style.css';
import { SurveyQuestion } from './Question';
import { SaveAnswersContext } from '../../pages/MainSurvey';
import { PagesContext } from '../../pages/MainSurvey';

const SurveyContainer = () => {
  const [index, setIndex] = useState(0);
  const { answer, answerDispatch } = useContext(SaveAnswersContext);
  const { pages, setPages } = useContext(PagesContext);

  const clickOption = (e) => {
    if (SurveyQuestion.length == index + 1) {
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      alert('1단계 테스트 종료!  2단계로 이동');
    } else {
      setIndex(index + 1);
      setPages(pages + 20);
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
    }
  };

  return (
    <div className="AnswerContainer">
      <button
        className="AnswerCard"
        onClick={clickOption}
        value={SurveyQuestion[index].options[0].option}
      >
        <h5>{SurveyQuestion[index].options[0].option}</h5>
      </button>
      <button
        className="AnswerCard"
        onClick={clickOption}
        value={SurveyQuestion[index].options[1].option}
      >
        <h5>{SurveyQuestion[index].options[1].option}</h5>
      </button>
    </div>
  );
};

export default SurveyContainer;
