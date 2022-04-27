import React, { useState, useContext, useEffect } from 'react';
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
    if (SurveyFirstQuestion.length == index + 1) {
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      setPercent(percent + 20);
      setIndex(0);
      setStep(2);
      console.log(index);
    } else {
      setIndex(index + 1);
      setPercent(percent + 20);
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
    }
  }; // index == 4

  useEffect(() => {
    if (step == 2) {
      console.log(answer);
      console.log(display);
      const temp = answer.slice(1, 6);
      setDisplay([temp[0], temp[1]].join(''));
      setDisplay([temp[2], temp[3]].join(''));
    }
  }, [step, answer, display]);
  // 로직
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
          {SurveySecondQuestion.filter((it) => it.id == display[index]).map(
            (x) => (
              <>
                <p>{x.Q}</p>
                <button
                  className="AnswerCard"
                  onClick={clickOption}
                  value={x.options[0].option}
                >
                  <h5>{x.options[0].option}</h5>
                </button>
                <button
                  className="AnswerCard"
                  onClick={clickOption}
                  value={x.options[1].option}
                >
                  <h5>{x.options[1].option}</h5>
                </button>
              </>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SurveyContainer;
