import React from 'react';

import './Nav.css';

const Navmain = () => {
  return (
    <nav class='nav' id='nav'>
      <div id='img'>
        <a href='#'>
          <img
            src={process.env.PUBLIC_URL + '/imgs/CountryGOGO.png'}
            class='mr-3 w-32 '
            alt='logo'
          />
        </a>

        <div class='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul>
            <li>
              <a href='#' aria-current='page'>
                Home
              </a>
            </li>

            <li>
              <a
                href='#'
                class='font-extrabold text-base block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                다른 도시 보기
              </a>
            </li>

            <li>
              <a
                href='#'
                class='font-extrabold text-base block rounded-full py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navmain;
