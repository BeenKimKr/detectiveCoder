/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
// s
<<<<<<< HEAD
// import Nav from '../../components/Nav/Nav';
import video from '../../pages/Home/Clouds.mp4';
=======
import video from "../../pages/Home/Clouds.mp4";
>>>>>>> be_authAndBadge_kb

const Home = () => {
  return (
    <div className="container relative flex-col items-center justify-center h-screen w-screen mb-12 overflow-hidden">
      <div className="#"></div>

      <div className="relative z-30 p-5 text-2xl rounded-xl">
        <main className="lg:px-8  mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-0 lg:mt-0 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className=" xl:inline">나의 소울시티를 찾아보세요!</span>{" "}
              <span className="block text-indigo-600 xl:inline">
                COUNTRY GOGO
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              오래 기다리셨습니다! 코로나의 장기화로 해외여행에 대한 갈망이
              증가하며, 최근 해외여행을 준비하는 여행객들이 많아지고 있습니다!
              어디로 떠나야할지 망설이지 마세요! 당신과 맞는 도시를
              추천해드립니다.😊
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  나와 맞는 도시 찾기!
                </a>
              </div>
            </div>
          </div>
        </main>
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
