import React, { useState, useEffect, useContext } from 'react';
import { PercentContext, SaveAnswersContext } from '../../pages/MainSurvey';
import { HPIQUESTIONS } from './text/HPIQUESTIONS';
import './style.css';

const useClickAnswer = () => {
  const [percent, setPercent] = useState(0);
  const [count, setCount] = useState(1);

  const customCount = (e) => {
    if (count < 7) {
      setCount((it) => it + 1);
    }
    setPercent((it) => it + 14.3);
  };

  return { percent, count, customCount };
};

const SurveyContainer = () => {
  const FirstQuestion = [
    'socialSupport',
    'corruption',
    'Freedom',
    'price',
    'GDP',
    'mean',
    'HLE',
    'Generosity',
  ];

  const [tempArray, setTempArray] = useState([]);
  const [question, setQuestion] = useState([]);
  const [winner, setWinners] = useState([]);
  const { setModalOpen } = useContext(PercentContext);
  const { setAnswer, answer } = useContext(SaveAnswersContext);
  const { percent, count, customCount } = useClickAnswer();

  useEffect(() => {
    setQuestion(FirstQuestion);
    setTempArray([FirstQuestion[0], FirstQuestion[1]]);
  }, []);

  const handleClickAnswer = (e) => {
    if (question.length <= 2) {
      if (winner.length === 0) {
        // 마지막 질문
        setModalOpen(true);
      } else {
        let updateStep = [...winner, e.currentTarget.value];
        setQuestion(updateStep);
        setTempArray([updateStep[0], updateStep[1]]);
        setWinners([...winner, e.currentTarget.value]);
        setWinners([]); // 마지막 질문일때 winner.length == 6
      }
    } else if (question.length > 2) {
      setWinners([...winner, e.currentTarget.value]);
      setTempArray([question[2], question[3]]);
      setQuestion(question.slice(2));
    }
    customCount();
    setAnswer([...answer, e.currentTarget.value]);
  };

  return (
    <>
      <div>
        <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        <div className="AnswerContainer">
          <span className="countText">{`${count} / 7`}</span>
          {HPIQUESTIONS.filter((it) => it.id == tempArray[0]).map((x) => (
            <>
              <button
                className="AnswerCard"
                value={tempArray[0]}
                onClick={handleClickAnswer}
              >
                <h5>{x.descriptions[tempArray[1]]}</h5>
              </button>
            </>
          ))}
          {HPIQUESTIONS.filter((it) => it.id == tempArray[1]).map((x) => (
            <>
              <button
                className="AnswerCard"
                value={tempArray[1]}
                onClick={handleClickAnswer}
              >
                <h5>{x.descriptions[tempArray[0]]}</h5>
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SurveyContainer;
