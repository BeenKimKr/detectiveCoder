import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import './style.css';

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
  const [select, setSelect] = useState('score');
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(12);
  const [sort, setSort] = useState([]); // 결과 저장

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, [offset]);

  const handleSelect = (e) => {
    setSelect(e.target.value);
    getData(e.target.value);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setOffset((prev) => prev + 3);
    }
  };

  const getData = async () => {
    if (sort.length < 100) {
      try {
        const res = await Api.get(`rank/sort/${select}/${offset}`); // 미국의 등수
        const result = res.data;
        setSort([...sort, ...result]);
      } catch {
        console.log('error');
      }
    }
  };

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <div className="container bg-white w-screen flex-row">
      <div>
        <div>
          <h1>{`${select} 순으로 보기.`}</h1>
        </div>
        <div className="bg-amber-100 w-full h-32 items-center  justify-center flex ">
          {HPI.map((it, index) => {
            return (
              <button
                name={it.name}
                key={index}
                value={it.value}
                onClick={handleSelect}
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
            <div className="countryCard" key={index}>
              <img
                class="imgCard"
                src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${it.Ab}-flag.gif`}
              />
              <div className="p-4">
                <h1 className="countryCardText">
                  {index === 0
                    ? `${it.Country}🥇`
                    : index === 1
                    ? `${it.Country}🥈`
                    : index === 2
                    ? `${it.Country}🥉`
                    : `${it.Country}`}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCities;
