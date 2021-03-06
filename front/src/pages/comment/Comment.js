import React, { useState } from 'react';
import * as Api from '../../api';

const Rating = [
  { value: '1', name: '⭐️' },
  { value: '2', name: '⭐️⭐️' },
  { value: '3', name: '⭐️⭐️⭐️' },
  { value: '4', name: '⭐️⭐️⭐️⭐️' },
  { value: '5', name: '⭐️⭐️⭐️⭐️⭐️' },
];

const Comment = ({ setCheckSubmit }) => {
  const [score, setScore] = useState('');
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setScore(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (score.length !== 0 && comment.length !== 0) {
      await Api.post('comment', {
        score,
        comment,
      });
      setCheckSubmit(true);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div className="mx-auto flex w-96 h-96 flex-col justify-center items-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
        <div className="font-jua mr-8 text-custom-main-hover ">
          <p>자세한 결과를 확인하려면,</p>
          <p>별점과 한 줄 평(50자 이내)을 남겨주세요.😊</p>
        </div>
        <select class="h-12 w-28 mt-6  mr-48 " onChange={handleChange}>
          <option disabled selected>
            평점
          </option>
          {Rating.map((it, index) => {
            return (
              <option name={it.name} key={index} value={it.value}>
                {it.name}
              </option>
            );
          })}
        </select>
        <div class="">
          <textarea
            maxlength="50"
            type="text"
            id="large-input"
            onChange={(e) => setComment(e.target.value)}
            class="block p-4  resize-none h-24 w-72  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md  focus:border-cutom-main dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          class="text-yellow-400 mt-5  ml-52 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
        >
          전송
        </button>
        {open && (
          <p className="font-jua  text-rose-400">
            별점과 한 줄 평을 남겨주세요.🥲
          </p>
        )}
      </div>
    </>
  );
};

export default Comment;
