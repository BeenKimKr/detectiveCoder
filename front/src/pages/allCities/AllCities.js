import React, { useEffect, useState } from 'react';
import ResultModal from './ResultModal';
import * as Api from '../../api';
import './style.css';

const useClickBtn = () => {
  const [title, setTitle] = useState('행복지수');
  const [select, setSelect] = useState('score');
  const [offset, setOffset] = useState(12);
  const [sort, setSort] = useState([]); // 결과 저장

  const handleClick = (e) => {
    setSelect(e.target.value);
    setTitle(e.target.name);
    setSort([]);
    setOffset(12);
  };

  return { title, select, offset, sort, setSort, setOffset, handleClick };
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
  const [rank, setRank] = useState([]);
  const { title, select, offset, sort, handleClick, setSort, setOffset } =
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
      } catch {
        console.log('error');
      }
    }
  };

  const clickCard = async (e) => {
    const res = await Api.get(`country/rank/${e.currentTarget.value}`);
    console.log(res.data);
    setRank(res.data);
    setModalOpen(true);
  };

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <div className="container bg-white w-screen flex-row text-center">
      <div className="titleButtonContainer">
        <span className="titleText">{`${title} 순으로 보기.`}</span>
        <div className="mt-5">
          {HPI.map((it, index) => {
            return (
              <button
                disabled={select === it.value}
                name={it.name}
                key={index}
                value={it.value}
                onClick={handleClick}
                class="btn"
              >
                {it.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-11" onScroll={handleScroll}>
        {/* 이미지 카드 */}
        {sort.map((it, index) => {
          return (
            <button
              className="countryCard"
              key={index}
              onClick={clickCard}
              value={it.Country}
            >
              <img
                class="imgCard"
                src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${it.Ab}-flag.gif`}
              />
              <div className="p-4">
                <span className="countryCardText">
                  {index === 0
                    ? `${it.Country}🥇`
                    : index === 1
                    ? `${it.Country}🥈`
                    : index === 2
                    ? `${it.Country}🥉`
                    : `${it.Country}`}
                </span>
              </div>
            </button>
          );
        })}
      </div>
      {modalOpen && <ResultModal open={modalOpen} rank={rank} />}
    </div>
  );
};

export default AllCities;
