import Image from 'next/image';
import React from 'react';

import Computer_Investor from '@/public/assets/images/better_investor.png';
import Bg_Investor from '@/public/assets/images/investor_bg.png';

const IntroduceInvestor = () => {
  return (
    <div className="flex justify-center">
      <div className="relative grid grid-cols-12 overflow-hidden ">
        <div className="relative z-10 col-span-12 flex items-center py-20">
          <div className="flex justify-center">
            <div className="grid w-2/3 grid-cols-3 gap-10 max-md:flex max-md:w-full max-md:flex-col max-md:px-5">
              <div className="col-span-1 flex flex-col gap-5">
                <div className="text-6xl font-[700] max-md:text-4xl">
                  Become <span className="hidden max-md:inline-block">a</span>{' '}
                  <br /> <span className="max-md:hidden"> a </span>
                  <span className="text-[#0698E5]">
                    Better{' '}
                    <span className="hidden max-md:inline-block">Investor</span>
                  </span>{' '}
                  <div className="whitespace-nowrap">
                    <span className="text-[#0698E5]">
                      Investor <span className="text-black">today</span>{' '}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-semibold">
                  What you need to know about Investing before the get-go. Your
                  Financial Journey starts from here today
                </div>
              </div>
              <div className="col-span-2 p-5 max-md:p-0">
                <div className="">
                  <Image
                    src={Computer_Investor}
                    height={1080}
                    width={1920}
                    alt="Bg-investor-computer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Bg_Investor}
          alt="Bg-investor"
          className="absolute h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default IntroduceInvestor;
