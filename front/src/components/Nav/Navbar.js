import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav class='nav w-screen h-screen bg-transparent px-2 sm:px-4 py-2.5 rounded'>
      <div class='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='#' class='flex items-center'>
          <img
            src={process.env.PUBLIC_URL + '/imgs/CountryGOGO.png'}
            class='mr-3 w-32 '
            alt='logo'
          />
        </a>
        {/* <button
          data-collapse-toggle='mobile-menu'
          type='button'
          class='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='mobile-menu'
          aria-expanded='false'
        >
          <span class='sr-only'>Open main menu</span>
          <svg class='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
            <path fill-rule='evenodd' clip-rule='evenodd'></path>
          </svg>
          <svg class='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
            <path fill-rule='evenodd' clip-rule='evenodd'></path>
          </svg>
        </button> */}
        <div class='hidden w-full md:block md:w-auto' id='mobile-menu'>
          <ul class='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <a
                href='#'
                class='font-black text-base block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                class='font-extrabold text-base block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                다른 도시 보기
              </a>
            </li>

            <li>
              <a
                href='#'
                class='font-extrabold text-base block rounded-full py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
