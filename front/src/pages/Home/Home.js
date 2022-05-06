/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import video from './Clouds.mp4';

const Home = () => {
  return (
    <div className="container relative flex-col items-center justify-center h-screen w-screen mb-12 overflow-hidden">
      <div className="absolute justify-center item-center m-5 z-30 p-5 text-2xl rounded-xl">
        <main className=" lg:px-8 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-0 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="font-noto text-4xl tracking-tight font-extrabold justify-center text-white sm:text-5xl md:text-6xl">
              <span className=" xl:inline">나의 소울시티를 찾아보세요!</span>{' '}
              <span className="block text-custom-main xl:inline font-fred">
                COUNTRY GOGO
              </span>
            </h1>
            <p className=" font-irop mt-3 object-cover   text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg: text-left">
              오래 기다리셨습니다! 코로나의 장기화로 해외여행에 대한 갈망이
              증가하며, 최근 해외여행을 준비하는 여행객들이 많아지고 있습니다!
              어디로 떠나야할지 망설이지 마세요! 당신과 맞는 도시를
              추천해드립니다.😊
            </p>
          </div>
        </main>
        <div className=" ml-48 items-center  sm:mt-8 sm:flex justify-center ">
          <a
            href="/mainsurvey"
            className="font-noto font-bold flex items-center justify-center px-8 py-3 border border-transparent  rounded-md text-white bg-custom-main hover:bg-custom-main-hover md:py-4 md:text-lg md:px-10"
          >
            나와 맞는 도시 찾기!
          </a>
        </div>
      </div>

      <div className="z-10 w-auto min-w-full min-h-full max-w-none">
        <video muted autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
