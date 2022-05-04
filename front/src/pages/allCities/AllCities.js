import React, { useEffect, useState } from "react";
import { dummy } from "./dummy";
import "./style.css";

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
  const [select, setSelect] = useState("");
  const [preItems, setPreItems] = useState(0);
  const [items, setItems] = useState(12);
  const [sort, setSort] = useState([]); // 결과 저장

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelect = (e) => {
    setSelect(e.target.name);
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
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
  };

  useEffect(() => {
    getData();
  }, []);

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
                src={`https://team-detective-coder-bucket.s3.ap-northeast-2.amazonaws.com/flags_img/${it}-flag.gif`}
              />
              <div className="p-4">
                <h1 className="countryCardText">
                  {index === 0
                    ? `${it}🥇`
                    : index === 1
                    ? `${it}🥈`
                    : index === 2
                    ? `${it}🥉`
                    : `${it}`}
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
