import Image from 'next/image';
import React, { useState } from 'react';

import AppDemo from '@/public/assets/images/app_demo_mock.png';
import Bg_Gradient from '@/public/assets/images/bg_gradient_introduce.png';

const IntroduceFeature = () => {
  const [currentTab, setCurrentTab] = useState<Number>(1);

  const tabs = [
    {
      id: 1,
      tabTitle: (
        <div>
          <span className="max-md:block">Store digital assets all</span>
          <span>in one wallet</span>
        </div>
      ),
      title: 'Grow your assets while store your money here.1',
      content: (
        <Image
          src={AppDemo}
          width={400}
          height={600}
          alt="Manage Digital Assets"
        />
      ),
    },
    {
      id: 2,
      tabTitle: (
        <div>
          <span className="max-md:block">Track all your wallets</span>
          <span>in one App</span>
        </div>
      ),
      title: 'Grow your assets while store your money here.2',
      content: (
        <Image
          src={AppDemo}
          width={400}
          height={600}
          alt="Manage Digital Assets"
        />
      ),
    },
    {
      id: 3,
      tabTitle: (
        <div>
          <span className="max-md:block">Exchange local currency</span>
          <span>into digital assets</span>
        </div>
      ),
      title: 'Grow your assets while store your money here.3',
      content: (
        <Image
          src={AppDemo}
          width={400}
          height={500}
          alt="Manage Digital Assets"
          className="relative z-10"
        />
      ),
    },
  ];

  const handleTabClick = (e: any) => {
    setCurrentTab(Number(e.target.id));
  };

  const renderTab = (
    <div className="container">
      <div className="grid grid-cols-3 gap-5">
        {tabs.map((tab: any) => (
          <div
            role="presentation"
            className="flex flex-col py-3 cursor-pointer"
            key={tab?.id}
            onClick={() => setCurrentTab(tab?.id)}
          >
            <div className="grid h-[6px] w-full grid-cols-2 rounded-lg bg-[#E2E8F0]">
              <div
                className={`col-span-1 h-full w-full rounded-lg ${
                  currentTab === tab?.id && 'bg-[#0698E5]'
                } `}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="relative content">
        {tabs.map((tab: any) => (
          <div key={tab?.title}>
            {currentTab === tab?.id && (
              <div>
                <button
                  className={`mt-10 text-left text-2xl font-[600] ${
                    currentTab === tab?.id && 'text-[#0698E5]'
                  } whitespace-nowrap`}
                  type="button"
                  key={tab?.id}
                  id={tab?.id}
                  disabled={currentTab === tab?.id}
                  onClick={handleTabClick}
                >
                  {currentTab === tab?.id && tab.tabTitle}
                </button>
                <div>{tab?.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="">
      {/* -------------------------------Title----------------------------------- */}

      <div className="flex justify-center my-10">
        <div className="!w-2/3 whitespace-nowrap text-5xl font-[700]	max-xl:whitespace-normal max-md:w-full max-md:text-3xl">
          Manage Digital Assets Made Easy
        </div>
      </div>
      <div className="flex justify-center">
        {' '}
        <div className="grid w-2/3 grid-cols-12">
          <div className="flex justify-end col-span-12">
            <div className="text-2xl text-[#64748B] max-md:text-base">
              Galaxy Wallet offers users, particularly non-crypto users, an
              intuitive, all-encompassing solution that goes beyond a standard
              wallet with basic coins/NFTs storage and transfer features
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------Content----------------------------------- */}
      <div className="relative grid grid-cols-12 mt-10">
        <div className="col-span-2" />
        <div className="z-20 col-span-8">
          <div className="">{renderTab}</div>
        </div>
        <Image
          src={Bg_Gradient}
          width={1920}
          height={1080}
          alt="Bg-Gradient"
          className="absolute bottom-0 z-10"
        />
      </div>
    </div>
  );
};

export default IntroduceFeature;
