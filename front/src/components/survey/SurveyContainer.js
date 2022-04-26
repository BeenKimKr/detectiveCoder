import React, { useState, useContext } from 'react';
import './style.css';
import { SurveyFirstQuestion } from './question/SurveyFirstQuestion';
import { SurveySecondQuestion } from './question/SurveySecondQuestion';
import { SaveAnswersContext } from '../../pages/MainSurvey';
import { PercentContext } from '../../pages/MainSurvey';

const SurveyContainer = () => {
  const [index, setIndex] = useState(0);
  const { answer, answerDispatch } = useContext(SaveAnswersContext);
  const { step, setStep, percent, setPercent } = useContext(PercentContext);
  const [display, setDisplay] = useState([]);

  const clickOption = (e) => {
    console.log(SurveyFirstQuestion);
    if (SurveyFirstQuestion.length == index + 1) {
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      setPercent(percent + 20);
      const temp = answer.slice(1, 6);
      display.push([temp[0], temp[1]].join(''));
      display.push([temp[2], temp[3]].join(''));
      setStep(2);
    } else {
      setIndex(index + 1);
      setPercent(percent + 20);
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
    }
  };

  return (
    <div className="AnswerContainer">
      {step === 1 ? (
        <>
          <button
            className="AnswerCard"
            onClick={clickOption}
            value={SurveyFirstQuestion[index].options[0].id}
          >
            <h5>{SurveyFirstQuestion[index].options[0].option}</h5>
          </button>
          <button
            className="AnswerCard"
            onClick={clickOption}
            value={SurveyFirstQuestion[index].options[1].id}
          >
            <h5>{SurveyFirstQuestion[index].options[1].option}</h5>
          </button>
        </>
      ) : (
        <div>
          <p>일단</p>
          {SurveySecondQuestion.filter((it) => it.id === display[0]).map(
            (x) => {
              <button className="AnswerCard">
                <p>{x.Q}</p>
              </button>;
            }
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyContainer;
