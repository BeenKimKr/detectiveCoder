// 설문조사 페이지
import React, { useState, createContext, useEffect } from 'react';
import SurveyContainer from '../components/survey/SurveyContainer';
import Modal from '../components/modal/Modal';
import SurveyTemp from '../components/survey/SurveyTemp';
import * as Api from '../api';

export const SaveAnswersContext = createContext();
export const PercentContext = createContext();

// const useUpdatePercent = () => {

// };

const MainSurvey = () => {
  // const navigate = useNavigate();
  const [answer, setAnswer] = useState([]);
  const [temp, setTemp] = useState(24);
  const [percent, setPercent] = useState(0);
  const [step, setStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);

  const saveAnswers = {
    setAnswer,
    answer,
    temp,
    setTemp,
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
    setId(Math.floor(Math.random() * 101));
  }, []);

  console.log(id);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await Api.post('survey/create', {
        id,
        temp,
        answer,
      });
      // const res = await Api.get(`survey/${}`);
      // navigate(`/cityInfo`);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
      }
    }
  };

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
