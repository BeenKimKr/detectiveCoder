// 설문조사 페이지
import React, { useState, createContext, useReducer, useEffect } from 'react';
import SurveyContainer from '../components/survey/SurveyContainer';
import Modal from '../components/modal/Modal';

export const SaveAnswersContext = createContext();
export const PercentContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT': {
      return [...state, action.data];
    }
    default:
      return state;
  }
};

const MainSurvey = () => {
  const [answer, answerDispatch] = useReducer(reducer, []);
  const [submit, setSubmit] = useState([]);
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const saveAnswers = {
    submit,
    setSubmit,
    answerDispatch,
    answer,
  };
  const changePercent = { setModalOpen, percent, setPercent };

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  useEffect(() => {
    console.log(answer);
  }, [answer]);

  const click = () => {
    const result = {};
    submit.forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });

    answerDispatch({ type: 'INPUT', data: result });
  };

  return (
    <div className="container w-screen h-screen  ">
      <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="m-auto mt-48">
        <PercentContext.Provider value={changePercent}>
          <SaveAnswersContext.Provider value={saveAnswers}>
            <SurveyContainer />
            <Modal open={modalOpen} click={click}>
              테스트를 완료하였습니다😊
            </Modal>
          </SaveAnswersContext.Provider>
        </PercentContext.Provider>
      </div>
    </div>
  );
};

export default MainSurvey;
