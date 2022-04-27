import React, { useState, useContext, useEffect } from 'react';
import { QUESTIONS } from './question/QUESTIONS';
import { FirstQuestion } from './question/FirstQuestion';
import { SaveAnswersContext } from '../../pages/MainSurvey';
import { PercentContext } from '../../pages/MainSurvey';
import Button from '../../components/Button/CommonButton';

import './style.css';

const SurveyContainer = () => {
  const [index, setIndex] = useState(0);
  const { answer, answerDispatch } = useContext(SaveAnswersContext);
  const { percent, setPercent } = useContext(PercentContext);
  const [tempArray, setTempArray] = useState([]);
  const [finalArray, setFinalArray] = useState([]);
  const [nextStep, setNextStep] = useState(false);
  const [step, setStep] = useState(1);

  const handleClickAnswer = (e) => {
    if (step == 1) {
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      setIndex(index + 1);
      setPercent(percent + 20);
      if (FirstQuestion.length == index + 1) {
        setPercent(percent + 20);
        setIndex(0);
        setTempArray(answer.slice(1, 5));
        setStep(2);
      }
      //  두번째
    } else if (step == 2) {
      setNextStep(false);
      console.log('step2', tempArray);
      setFinalArray([...finalArray, e.currentTarget.value]);
      answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      setIndex(index + 1);
      if (tempArray.length == index + 2) {
        setNextStep(true);
        setTempArray(answer.slice(5, 7));
        setNextStep(true);
        setIndex(0);
      }
    }
    //  세번째
    else {
      console.log('step3', tempArray);
    }
  };

  useEffect(() => {
    setTempArray(answer.slice(5, 7));
  }, [nextStep, answer]);

  return (
    <>
      <div>
        <div className="AnswerContainer">
          {step === 1 ? (
            <>
              <button
                className="AnswerCard"
                onClick={handleClickAnswer}
                value={FirstQuestion[index].options[0].id}
              >
                <h5>{FirstQuestion[index].options[0].option}</h5>
              </button>
              <button
                className="AnswerCard"
                onClick={handleClickAnswer}
                value={FirstQuestion[index].options[1].id}
              >
                <h5>{FirstQuestion[index].options[1].option}</h5>
              </button>
            </>
          ) : (
            <>
              {QUESTIONS.filter((it) => it.id == tempArray[index]).map((x) => (
                <>
                  <button
                    className="AnswerCard"
                    value={[tempArray[index]]}
                    onClick={handleClickAnswer}
                  >
                    <h5>{x.descriptions[tempArray[index + 1]]}</h5>
                  </button>
                </>
              ))}
              {QUESTIONS.filter((it) => it.id == tempArray[index + 1]).map(
                (x) => (
                  <>
                    <button
                      className="AnswerCard"
                      value={[tempArray[index + 1]]}
                      onClick={handleClickAnswer}
                    >
                      <h5>{x.descriptions[tempArray[index]]}</h5>
                    </button>
                  </>
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SurveyContainer;
