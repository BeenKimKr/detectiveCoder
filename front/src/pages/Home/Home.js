/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect, useContext } from 'react';
import video from './Clouds.mp4';
import Nav from '../../components/Nav/Nav';
import * as Api from '../../api';

const Home = () => {
  return (
    <>
      <div className="container relative flex-col items-center justify-center w-screen mb-12 overflow-hidden">
        <Nav />
        <div className="absolute justify-center item-center m-5 z-30 p-5 text-2xl rounded-xl">
          <main className=" lg:px-8 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-0 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="font-noto text-4xl tracking-tight font-extrabold justify-center text-white sm:text-5xl md:text-6xl">
                <span className=" xl:inline">나의 소울시티를 찾아보세요!</span>{' '}
                <span className="block text-custom-main xl:inline font-fred">
                  COUNTRY GOGO
                </span>
              </h1>
              <div className=" font-noto font-bold mt-3 object-cover ml-0  text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg: text-left">
                <p className="text-xl">어디로 떠나야할지 망설이지 마세요! </p>
                <p> 당신과 맞는 도시를 추천해드립니다.</p>
              </div>
            </div>
          </main>
          <div className=" ml-48 items-center  sm:mt-8 sm:flex justify-center ">
            <a
              href="/mainsurvey"
              className="font-noto font-bold flex items-center justify-center px-8 border  border-white  rounded-md text-white   md:text-lg md:px-10"
            >
              나와 맞는 도시 찾기
              <img
                src={
                  process.env.PUBLIC_URL + '/imgs/free-icon-travel-4652340.png'
                }
                className="w-10 h-10 mt-1  ml-2"
              />
            </a>
          </div>
        </div>
        <div className="z-10 w-auto min-w-full min-h-full max-w-none">
          <video muted autoPlay loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <footer class=" text-center p-4 bg-white rounded-lg shadow md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 text-center sm:text-center dark:text-gray-400">
          © 2022 <a>명탐정 코더🕵️‍♂️</a>
        </span>
      </footer>
    </>
  );
};

export default Home;
