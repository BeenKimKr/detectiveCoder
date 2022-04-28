import React, { useState, useEffect, useContext } from 'react';
import { QUESTIONS } from './QUESTIONS';
import { SaveAnswersContext } from '../../pages/MainSurvey';
import { PercentContext } from '../../pages/MainSurvey';
import './style.css';

const SurveyContainer = () => {
  const FirstQuestion = [
    'socialSupport',
    'corruption',
    'Freedom',
    'price',
    'GDP',
    'temperature',
    'HLE',
    'Generosity',
  ];
  const { answer, answerDispatch } = useContext(SaveAnswersContext);
  const { setPercent, percent, step, setStep } = useContext(PercentContext);
  const [tempArray, setTempArray] = useState([]);
  const [winner, setWinners] = useState([]);
  const [question, setQuestion] = useState([]);
  const [final, setFinal] = useState(false);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    setQuestion(FirstQuestion);
    setTempArray([FirstQuestion[0], FirstQuestion[1]]);
  }, []);

  const handleClickAnswer = (e) => {
    setWinners([...winner, e.currentTarget.value]);
    if (question.length <= 2) {
      if (final === true) {
        setStep((it) => it + 1);
        setWinners([...winner, e.currentTarget.value]);
        answerDispatch({ type: 'INPUT', data: winner });
      } else {
        setWinners([...winner, e.currentTarget.value]);
        let updateStep = [...winner, e.currentTarget.value];
        setQuestion(updateStep);
        setTempArray([updateStep[0], updateStep[1]]);
        setStep((it) => it + 1);
        setFinal(true);
      }
    } else if (question.length > 2) {
      setWinners([...winner, e.currentTarget.value]);
      setTempArray([question[2], question[3]]);
      setQuestion(question.slice(2));
    }
    setPercent(percent + 20);
  };

  const FINAL = (e) => {
    setWinners([...winner, e.currentTarget.value]);
    answerDispatch({ type: 'INPUT', data: winner });
    console.log(answer);
  };

  return (
    <>
      <div>
        <div className="AnswerContainer">
          {QUESTIONS.filter((it) => it.id == tempArray[0]).map((x) => (
            <>
              <button
                className="AnswerCard"
                value={tempArray[0]}
                onClick={(e) => {
                  final == true ? FINAL(e) : handleClickAnswer(e);
                }}
              >
                <h5>{x.descriptions[tempArray[1]]}</h5>
              </button>
            </>
          ))}
          {QUESTIONS.filter((it) => it.id == tempArray[1]).map((x) => (
            <>
              <button
                className="AnswerCard"
                value={tempArray[1]}
                onClick={(e) => {
                  final == true ? FINAL(e) : handleClickAnswer(e);
                }}
              >
                <h5>{x.descriptions[tempArray[0]]}</h5>
              </button>
            </>
          ))}
        </div>
        {/* {open && <CommonButton text={'제출하기'} onClick={} />} */}
      </div>
    </>
  );
};

export default SurveyContainer;
