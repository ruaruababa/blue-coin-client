import Image from 'next/image';
import React from 'react';

import ArrowDownIcon from '@/components/icon/arrow_down';
import MenuIcon from '@/components/icon/menu';
import RocketIcon from '@/components/icon/rocket';
import Bitcoin_Logo from '@/public/assets/images/bitcoin_logo.png';
import ChainLink_Logo from '@/public/assets/images/chainlink_logo.png';
import ETH_Logo from '@/public/assets/images/eth_logo.png';
import handApp from '@/public/assets/images/hand_app.png';
import logo from '@/public/assets/images/logo_web.png';

const Banner = () => {
  return (
    <div className="relative">
      {/* -------------------  navbar ----------------------*/}
      <div className="absolute z-10 flex w-full justify-center ">
        <div className="flex w-2/3 justify-between max-md:w-full max-md:p-5">
          <div className="">
            <Image src={logo} alt="logo-web" width={100} height={50} />
          </div>
          <div className="">
            {' '}
            <MenuIcon />
          </div>
        </div>
      </div>
      {/* -------------------  navbar ----------------------*/}
      <div className="flex justify-end ">
        <div className="grid w-5/6 grid-cols-12 max-md:mt-20 max-md:flex max-md:w-full max-md:flex-col max-md:gap-5">
          <div className="col-span-5 grid grid-cols-5 max-md:flex max-md:flex-col">
            <div className="col-span-3 flex flex-col items-center justify-center gap-10 max-md:gap-5 max-md:px-5 ">
              <div className="w-full text-6xl font-bold max-[1855px]:text-4xl max-2xl:text-4xl max-xl:text-3xl">
                The Only <br /> Social Wallet <br /> for Web 3.0
              </div>
              <div className="flex flex-col gap-20 max-md:gap-10">
                <div className="text-[20px] font-semibold max-2xl:hidden max-md:block max-md:text-base">
                  Sodales nunc ultrices odio ultricies tristique fringilla
                  platea. Eu volutpat gravida lectus turpis egestas purus
                  rhoncus.
                </div>
                <div className="flex w-full gap-10">
                  <div className="grid cursor-pointer grid-cols-4 items-center rounded-lg bg-blue-500 px-7 py-2 max-[1367px]:gap-1">
                    <RocketIcon />
                    <span className="col-span-3 px-2 text-xl text-white max-[1367px]:text-lg">
                      Lauch App
                    </span>
                  </div>
                  <div className="flex cursor-pointer items-center">
                    <ArrowDownIcon />
                    <span className="text-xl text-blue-500">Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative col-span-7 h-full w-full overflow-hidden hover:cursor-pointer">
            <Image
              src={handApp}
              className="relative bottom-[-35px] right-[-25px] animate-apple_watch transition-all duration-500"
              alt="logo-web"
              width={1920}
            />
            <Image
              src={ETH_Logo}
              className="absolute left-1 top-1 animate-apple_watch transition-all duration-500 max-md:w-[80px]"
              alt="logo-ETH_Logo"
            />
            <Image
              src={ChainLink_Logo}
              className="absolute left-60 top-1 animate-apple_watch transition-all duration-500 "
              alt="logo-ChainLink_Logo"
            />
            <Image
              src={Bitcoin_Logo}
              className="absolute bottom-0 right-0 animate-apple_watch transition-all duration-500  max-md:w-[100px]"
              alt="logo-Bitcoin_Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
