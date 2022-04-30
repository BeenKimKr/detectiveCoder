// 설문조사 페이지
import React, { useState, createContext, useReducer, useEffect } from 'react';
import SurveyContainer from '../components/survey/SurveyContainer';
import Modal from '../components/modal/Modal';
import Spinner from '../components/Spinner';
import SurveyTemp from '../components/survey/SurveyTemp';

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
  const [percent, setPercent] = useState(0);
  const [step, setStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const saveAnswers = {
    submit,
    setSubmit,
    answerDispatch,
    answer,
  };
  const changePercent = {
    setModalOpen,
    percent,
    setPercent,
    step,
    setStep,
    setLoading,
    loading,
  };

  useEffect(() => {
    console.log(submit);
  }, [submit]);

  useEffect(() => {
    console.log(answer);
  }, [answer]); //코드 동작 확인하기 위한 코드입니다.

  const handleSubmit = async () => {
    // const result = {};
    // submit.forEach((x) => {
    //   result[x] = (result[x] || 0) + 1;
    // });

    answerDispatch({ type: 'INPUT', data: submit });
    setLoading(true);

    // await axios.post("", answer);
    // 결과 페이지로  Post
    // 아직 기온범위 구현  X.
  };

  console.log(loading);

  return (
    <div className="container w-screen h-screen  ">
      <div class="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          class="h-6 bg-custom-main rounded-full dark:bg-gray-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="m-auto">
        <PercentContext.Provider value={changePercent}>
          <SaveAnswersContext.Provider value={saveAnswers}>
            {step == 0 ? (
              <SurveyTemp />
            ) : (
              <>
                <SurveyContainer />
                <Modal open={modalOpen} click={handleSubmit} />
              </>
            )}
          </SaveAnswersContext.Provider>
        </PercentContext.Provider>
      </div>
    </div>
  );
};

export default MainSurvey;
