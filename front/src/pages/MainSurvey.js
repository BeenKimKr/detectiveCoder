// 설문조사 페이지
import React, { useState, createContext, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyContainer from '../components/survey/SurveyContainer';
import Modal from '../components/modal/Modal';
import SurveyTemp from '../components/survey/SurveyTemp';
import * as Api from '../api';
import { ResultContext } from '../App';

export const SaveAnswersContext = createContext();
export const PercentContext = createContext();

// const useUpdatePercent = () => {

// };

const MainSurvey = () => {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState([]);
  const [temp, setTemp] = useState(24);
  const [percent, setPercent] = useState(0);
  const [step, setStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const { setResultCountries, setResultHPIRank, setResultAmount } =
    useContext(ResultContext);

  const saveAnswers = {
    setSubmit,
    submit,
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

  const handleSubmit = async () => {
    const answer = submit.filter((it) => it != 'temperature');

    setLoading(true);

    try {
      await Api.post('country/sort', {
        id,
        temp,
        answer,
      });

      const res = await Api.get(`country/sort/${id}`); // 설문조사 결과 -> 미국
      const country = res.data[0].Country;
      const city = res.data[0].City;
      const rank = await Api.get(`country/rank/${country}`); // 미국의 등수
      const amount = await Api.get(`country/one/${city}`); // 미국의 차트 에 쓰이는 수치 -> 도시별 월별 기온 데이터!
      setResultCountries(res.data);
      setResultHPIRank(rank.data);
      setResultAmount(amount.data);
      setTimeout(() => navigate(`/cityInfo`), 3000);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
      }
    }
  };

  return (
    <div className='container w-screen h-screen'>
      <div className='w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700'>
        <div
          class='h-6 bg-custom-main rounded-full dark:bg-gray-300'
          style={{ width: `${percent}%` }}></div>
      </div>
      <div className='m-auto'>
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
