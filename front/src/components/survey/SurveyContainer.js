import React, { useState, useEffect, useContext } from 'react';
import { QUESTIONS } from './QUESTIONS';
import { SaveAnswersContext } from '../../pages/MainSurvey';
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
  const [tempArray, setTempArray] = useState([]);
  const [winner, setWinners] = useState([]);
  const [question, setQuestion] = useState([]);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    setQuestion(FirstQuestion);
    setTempArray([FirstQuestion[0], FirstQuestion[1]]);
  }, []);

  const handleClickAnswer = (e) => {
    if (question.length <= 2) {
      if (final === true) {
        setWinners([...winner, e.currentTarget.value]);
        answerDispatch({ type: 'INPUT', data: e.currentTarget.value });
      } else {
        setWinners([...winner, e.currentTarget.value]);
        let updateStep = [...winner, e.currentTarget.value];
        setQuestion(updateStep);
        setTempArray([updateStep[0], updateStep[1]]);
        setFinal(true);
      }
    } else if (question.length > 2) {
      setWinners([...winner, e.currentTarget.value]);
      setTempArray([question[2], question[3]]);
      setQuestion(question.slice(2));
    }
  };

  const onClick = () => {
    console.log(winner);
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
                onClick={handleClickAnswer}
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
                onClick={handleClickAnswer}
              >
                <h5>{x.descriptions[tempArray[0]]}</h5>
              </button>
            </>
          ))}
        </div>
        <button onClick={onClick}>결과창으로</button>
      </div>
    </>
  );
};

export default SurveyContainer;
