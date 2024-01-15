import React from 'react';

import CoinLogo from '@/components/icon/coin_logo';
import TrendingUpIcon from '@/components/icon/trending_up';

const PriceAndWallet = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#36D9FF] to-[#00E5C2] py-10 ">
      <div className="flex w-5/12 justify-between max-2xl:gap-3 max-md:w-full max-md:flex-col">
        <div className="flex justify-center">
          <div className="flex !w-[300px] items-center gap-3 rounded-full bg-[#0F1A2A] px-5 py-3 text-white opacity-[0.7] max-md:w-fit">
            <div className="flex items-center ">
              <CoinLogo height={32} />
            </div>
            <div className="text-2xl font-semibold">$999.999</div>
            <div className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-t from-[#1fe657] from-10% to-[#229020] to-70% px-2 max-xl:hidden max-md:flex max-md:w-full">
              <div className="">
                <TrendingUpIcon />
              </div>
              <div className="text-base">84%</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {' '}
          <div className=" flex !w-[300px] items-center gap-3 rounded-full bg-[#0F1A2A] px-5 py-3 text-white opacity-[0.7]">
            <div className="flex items-center">
              <CoinLogo height={32} />
            </div>
            <div className="text-2xl font-semibold ">BlueCoin Swap</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceAndWallet;
