import React from 'react';
import Nav from '../../components/Nav/Nav';
const products = [
  {
    id: 1,
    name: '백엔드',
    href: 'https://github.com/BeenKimKr',
    price: '김경빈',
    imageSrc: '/imgs/kkb.png',
  },

  {
    id: 2,
    name: '프론트엔드',
    href: 'https://github.com/Nayeon97',
    price: '김나연',
    imageSrc: '/imgs/kny.png',
  },
  {
    id: 3,
    name: '프론트엔드/팀장',
    href: 'https://github.com/yessssssssssol',
    price: '박예솔',
    imageSrc: '/imgs/pys.png',
  },
  {
    id: 4,
    name: '백엔드/데이터분석',
    href: 'https://github.com/gwonmin',
    price: '양권민',
    imageSrc: '/imgs/ykm.png',
  },
  {
    id: 5,
    name: '백엔드',
    href: '#',
    price: '이태성',
    imageSrc: '/imgs/its.png',
  },
  {
    id: 6,
    name: '프론트엔드',
    href: 'https://github.com/Jeongsiwook',
    price: '정시욱',
    imageSrc: '/imgs/jsw.png',
  },
];

const Team = () => {
  return (
    <div className='bg-white'>
      <Nav />
      <div className='container mt-0 bg-white w-screen flex-row text-center'>
        <h2 className='font-fred text-6xl flex justify-center font-extrabold tracking-tight text-gray-900'>
          TEAM
        </h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <a key={product.id} href={product.href} className='group'>
              <div className='w-full bg-contain bg-center bg-white rounded-full overflow-hidden'>
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className='w-full h-full  object-center object-cover group-hover:opacity-75'
                />
              </div>
              <h3 className='flex justify-center text-lg text-custom-main'>
                {product.name}
              </h3>
              <p className='flex justify-center font-bold text-xl text-gray-900'>
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
