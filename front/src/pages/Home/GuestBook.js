import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
const GuestBook = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const res = await Api.get(`comment/`);
    setCommentList(res.data);
    console.log(commentList);
  };

  return (
    <>
      <div className="container overflow-auto flex-col h-96 w-9/12 mb-12 ">
        <div class="flex justify-between items-center mb-4">
          <h5 class="text-xl font-bold leading-none text-custom-main dark:text-white">
            방명록✏️
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-base font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                {'index' === 1
                  ? '⭐️'
                  : 'index' === 2
                  ? '⭐️⭐️'
                  : 'index' === 3
                  ? '⭐️⭐️⭐️'
                  : 'index' === 4
                  ? '⭐️⭐️⭐️⭐️'
                  : '⭐️⭐️⭐️⭐️⭐️'}
              </span>
              <span class="flex-1 ml-3 whitespace-nowrap">방명록입니다.</span>
              <span class="flex-1 ml-3 whitespace-nowrap">시간(날짜)ㄴ</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default GuestBook;
