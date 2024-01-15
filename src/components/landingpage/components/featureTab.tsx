import Image from 'next/image';
import React, { useState } from 'react';

import BoyCoin from '@/public/assets/images/boy_coin.png';
import BoyTrading from '@/public/assets/images/boy_trading.png';
import SocialWalllet from '@/public/assets/images/social_wallet.png';

const FeatureTab = () => {
  const [currentTab, setCurrentTab] = useState('1');

  const tabs = [
    {
      id: 1,
      tabTitle: 'Manage Digital Assets',
      title: 'Grow your assets while store your money here.',
      content: (
        <Image
          src={BoyCoin}
          width={600}
          height={700}
          alt="Manage Digital Assets"
        />
      ),
    },
    {
      id: 2,
      tabTitle: 'Build Portfolio',
      title: 'Grow your assets while store your money here.',
      content: (
        <Image
          src={BoyTrading}
          width={600}
          height={700}
          alt="Manage Digital Assets"
        />
      ),
    },
    {
      id: 3,
      tabTitle: 'Social Wallet',
      title: 'Grow your assets while store your money here.',
      content: (
        <Image
          src={SocialWalllet}
          width={600}
          height={700}
          alt="Manage Digital Assets"
        />
      ),
    },
  ];

  const handleTabClick = (e: any) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="relative">
      <div className=" bg-opacity-10 bg-gradient-to-r from-[#36D9FF]/10 from-0% to-[#00E5C2]/10 to-100% ">
        <div className="relative pt-10 text-center text-2xl text-[#94A3B8] max-md:px-5">
          Built for everyone to store and earn digital assets
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-1/2 max-md:w-full max-md:p-5">
            <div className="tabs relative flex w-full rounded-full bg-white max-md:flex max-md:flex-col max-md:rounded-none">
              {tabs?.map((tab: any) => (
                <button
                  className={`${
                    currentTab === `${tab?.id}`
                      ? 'tabs-item active relative z-10 w-full cursor-pointer select-none from-[#36D9FF]  from-0% to-[#00E5C2] to-100% text-center  text-blue-700 focus:outline-none max-md:bg-gradient-to-r'
                      : 'rounded-full  text-[#94A3B8]'
                  } flex-1 py-3 text-lg font-semibold `}
                  type="button"
                  key={tab?.content}
                  id={tab?.id}
                  disabled={currentTab === `${tab?.id}`}
                  onClick={handleTabClick}
                >
                  {tab.tabTitle}
                </button>
              ))}
              <span
                className={`tab-item-animate inline-block bg-gradient-to-r from-[#36D9FF] from-0% to-[#00E5C2] to-100% py-[76px] max-[955px]:py-[80px] max-md:hidden ${
                  currentTab === '1' && 'active'
                }`}
              />
            </div>
            <div className="content">
              {tabs.map((tab: any) => (
                <div key={tab?.title}>
                  {currentTab === `${tab?.id}` && (
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-2xl text-[#64748B] max-md:px-5">
                        {tab?.title}
                      </p>
                      <div>{tab?.content}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTab;
