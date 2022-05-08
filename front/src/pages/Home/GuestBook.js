import React, { useState, useEffect } from 'react';
import * as Api from '../../api';

const GuestBook = () => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    try {
      Api.get('comment').then((res) => {
        console.log(res.data);
        setCommentList(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="container relative flex-col items-center justify-center w-screen  h-96 scroll-auto overflow-auto ">
        <div className="  p-10 mx-10  mt-3 rounded">
          <div class="flex justify-between items-center mb-4 ">
            <h5 class="text-xl font-bold leading-none text-custom-main dark:text-white">
              방명록✏️
            </h5>
          </div>
          <div class="flow-root bg-white p-3">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {commentList.map((it) => {
                return (
                  <>
                    <li class="py-1   mb-2 sm:py-4 bg-slate-50 font-jua text-ellipsis overflow-hidden">
                      <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-base font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        {it.score === 1
                          ? '⭐️'
                          : it.score === 2
                          ? '⭐️⭐️'
                          : it.score === 3
                          ? '⭐️⭐️⭐️'
                          : it.score === 4
                          ? '⭐️⭐️⭐️⭐️'
                          : '⭐️⭐️⭐️⭐️⭐️'}
                      </span>
                      <span class="flex-1 ml-9 whitespace-nowrap">
                        {it.comment}
                      </span>
                      <span class="flex-1 ml-3 whitespace-nowrap float-right text-custom-sub-hover mr-2">
                        ⏰{' '}
                        {`${it.time.slice(0, 4)}.${it.time.slice(
                          4,
                          6
                        )}.${it.time.slice(6, 8)}     ${it.time.slice(
                          8,
                          10
                        )}:${it.time.slice(10, 12)}`}
                      </span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestBook;
