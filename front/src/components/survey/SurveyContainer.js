import React, { useState, useEffect, useContext } from "react";
import { PercentContext, SaveAnswersContext } from "../../pages/MainSurvey";
import { HPIQUESTIONS } from "./text/HPIQUESTIONS";
import "./style.css";

const SurveyContainer = () => {
  const FirstQuestion = [
    "socialSupport",
    "corruption",
    "Freedom",
    "price",
    "GDP",
    "temperature",
    "HLE",
    "Generosity",
  ];

  const [tempArray, setTempArray] = useState([]);
  const [question, setQuestion] = useState([]);
  const [winner, setWinners] = useState([]);
  const { setModalOpen, setPercent } = useContext(PercentContext);
  const { setSubmit, submit } = useContext(SaveAnswersContext);

  useEffect(() => {
    setQuestion(FirstQuestion);
    setTempArray([FirstQuestion[0], FirstQuestion[1]]);
  }, []);

  const handleClickAnswer = (e) => {
    if (winner.length == 6) {
      setWinners([...winner, e.currentTarget.value]);
      setModalOpen(true);
    }
    if (question.length <= 2) {
      let updateStep = [...winner, e.currentTarget.value];
      setQuestion(updateStep);
      setTempArray([updateStep[0], updateStep[1]]);
      setWinners([...winner, e.currentTarget.value]);
    } else {
      setWinners([...winner, e.currentTarget.value]);
      setTempArray([question[2], question[3]]);
      setQuestion(question.slice(2));
    }
    setPercent((it) => it + 14.5); // winner -> percent 커스텀 훅 사용해보자~
    setSubmit([...submit, e.currentTarget.value]);
  };

  return (
    <>
      <div>
        <div className="AnswerContainer">
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
