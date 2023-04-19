import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 
      flex items-center justify-center  overflow-hidden lg:right-16 lg:left-auto lg:top-0 lg:bottom-auto sm:right-2 xs:right-0 lg:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative lg:w-24 ">
        <CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />

        <Link
          href="mailto:vadym.kobylan@gmail.com"
          className="flex items-center justify-center 
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
          text-light border-2 border-solid border-dark w-20 h-20 rounded-full
          font-semibold hover:bg-light hover:text-dark lg:w-12 lg:h-12 lg:text-[10px] sm:w-11 sm:h-11 sm:text-[8px]
          
          dark:bg-light dark:text-dark dark:hover:text-light dark:border-light dark:hover:bg-dark"
          target={'_blank'}>
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
