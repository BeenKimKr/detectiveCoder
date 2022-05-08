import React, { useEffect, useState } from 'react';
import ResultModal from './ResultModal';
import * as Api from '../../api';
import './style.css';
import Nav from '../../components/Nav/Nav';

const useClickBtn = () => {
  const [title, setTitle] = useState('행복지수');
  const [select, setSelect] = useState('score');
  const [offset, setOffset] = useState(12);
  const [sort, setSort] = useState([]); // 결과 저장

  const handleChange = (e) => {
    setSelect(e.target.value);
    setTitle(e.target.name);
    setSort([]);
    setOffset(12);
  };

  return { title, select, offset, sort, setSort, setOffset, handleChange };
};

const HPI = [
  { value: 'socialSupport', name: '사회복지' },
  { value: 'corruption', name: '청렴도' },
  { value: 'Freedom', name: '자유' },
  { value: 'price', name: '물가' },
  { value: 'GDP', name: 'GDP' },
  { value: 'Generosity', name: '관대함' },
  { value: 'HLE', name: '기대수명' },
];

const AllCities = () => {
  const [modalOpen, setModalOpen] = useState(false); // Modal
  const [data, setData] = useState([]);
  const { title, select, offset, sort, handleChange, setSort, setOffset } =
    useClickBtn();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, [select, offset]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setOffset((prev) => prev + 3);
    }
  };

  const getData = async () => {
    if (sort.length < 70) {
      try {
        const res = await Api.get(`rank/sort/${select}/${offset}`);
        const result = res.data;
        setSort([...sort, ...result]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clickCard = async (e) => {
    const res = await Api.get(`country/rank/${e.currentTarget.value}`);
    setData(res.data);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
  }, [sort]);

  return (
    <div className='container bg-white w-screen flex-row text-center '>
      <Nav />
      <div className='bg-sky-50  p-10 flex-row '>
        <div className='text-left ml-7  mb-3 flex'>
          <p className='font-jua text-xl text-sky-500 '>
            {' '}
            행복지수별 나라랭킹을 볼 수 있습니다.🥇
          </p>
        </div>
        <div className='flex'>
          <div className='ml-5'>
            <div className='mainContainer '>
              <p className='mt-2 text-blue-400 font-jua'>행복지수</p>
            </div>
          </div>
          <div className='ml-5'>
            <select
              class='selectContainer font-jua text-custom-sub-hover'
              onChange={handleChange}
            >
              <option disabled selected>
                종합
              </option>
              {HPI.map((it, index) => {
                return (
                  <option name={it.name} key={index} value={it.value}>
                    {it.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-11' onScroll={handleScroll}>
        {/* 이미지 카드 */}
        {sort.map((it, index) => {
          return (
            <button
              className='countryCard'
              key={index}
              onClick={clickCard}
              value={it.Country}
            >
              <img
                class='imgCard'
                src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${it.Ab}-flag.gif`}
              />
              <div className='pt-3 pl-3'>
                <span className='countryCardText'>{it.Country}</span>
                <span class='rankText'>
                  {index === 0
                    ? '🥇'
                    : index === 1
                      ? '🥈'
                      : index === 2
                        ? '🥉'
                        : `${index + 1}`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      {modalOpen && (
        <ResultModal open={modalOpen} close={closeModal} data={data} />
      )}
    </div>
  );
};

export default AllCities;
