<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import './style.css';
=======
import React, { useEffect, useState } from "react";
import { dummy } from "./dummy";
import "./style.css";
>>>>>>> be_authAndBadge_kb

const HPI = [
  { value: "socialSupport", name: "사회복지" },
  { value: "corruption", name: "청렴도" },
  { value: "Freedom", name: "자유" },
  { value: "price", name: "물가" },
  { value: "GDP", name: "GDP" },
  { value: "Generosity", name: "관대함" },
  { value: "HLE", name: "기대수명" },
];

const AllCities = () => {
<<<<<<< HEAD
  const [title, setTitle] = useState('행복지수');
  const [select, setSelect] = useState('score');
  const [offset, setOffset] = useState(12);
=======
  const [select, setSelect] = useState("");
  const [preItems, setPreItems] = useState(0);
  const [items, setItems] = useState(12);
>>>>>>> be_authAndBadge_kb
  const [sort, setSort] = useState([]); // 결과 저장

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getData();
  }, [select, offset]);

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setTitle(e.target.name);
    setSort([]);
    setOffset(12);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
<<<<<<< HEAD
      setOffset((prev) => prev + 3);
    }
  };

  const clickCard = (e) => {};

  const getData = async () => {
    if (sort.length < 70) {
      try {
        const res = await Api.get(`rank/sort/${select}/${offset}`); // 미국의 등수
        const result = res.data;
        setSort([...sort, ...result]);
      } catch {
        console.log('error');
      }
    }
=======
      console.log("Asd");
      setPreItems(items);
      setItems((prev) => prev + 12);
      getData();
    }
  };

  const getData = () => {
    console.log("Asdf");
    const result = dummy.slice(preItems, items);
    setSort([...sort, ...result]);
>>>>>>> be_authAndBadge_kb
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
            <button className="countryCard" key={index} onClick={clickCard}>
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
    </div>
  );
};

export default AllCities;
