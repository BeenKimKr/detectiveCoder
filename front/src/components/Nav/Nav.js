/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import KakaoLogin from '../Kakao/KakaoLogin';

import './Nav.css';

export default function Nav() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block lg:hidden h-8 w-auto"
              src="/imgs/CountryGOGO.png"
              alt="CountryGOGO"
            />
            <img
              className="hidden lg:block h-8 w-auto"
              src="/imgs/CountryGOGO.png"
              alt="CountryGoGo"
            />
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="hidden sm:block sm:ml-6">
            <KakaoLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
