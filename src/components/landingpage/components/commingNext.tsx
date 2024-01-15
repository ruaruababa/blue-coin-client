import Image from 'next/image';
import React, { useState } from 'react';

import Background_Soon from '@/public/assets/images/background_comming_soon.png';
import Bag_Market from '@/public/assets/images/bag_image.png';
import Box_Banking from '@/public/assets/images/box_image.png';
import Rocket from '@/public/assets/images/rocket_image.png';

const CurrentTab = {
  crowd_funding: 'crowd_funding',
  banking: 'banking',
  marketplace: 'marketplace',
};

const CommingSoon = () => {
  const [currentTab, setCurrentTab] = useState<String>(
    CurrentTab.crowd_funding
  );
  const Items = [
    {
      id: 1,
      key: 'crowd_funding',
      image: Rocket,
      title: (
        <span>
          Crowd Funding <br /> Platform
        </span>
      ),
    },
    {
      id: 2,
      key: 'banking',
      image: Box_Banking,
      title: (
        <span>
          ShopName <br /> Banking
        </span>
      ),
    },
    {
      id: 3,
      key: 'marketplace',
      image: Bag_Market,
      title: (
        <span>
          Marketplace <br /> and Beyond
        </span>
      ),
    },
  ];

  const renderTab = (
    <div className="container z-20">
      <div className="grid grid-cols-3 gap-5">
        {Items.map((tab: any) => (
          <div
            role="presentation"
            className="flex flex-col"
            key={`${tab?.key}keyNext`}
            onClick={() => setCurrentTab(tab?.key)}
          >
            <div className="grid h-[6px] w-full grid-cols-2 rounded-lg bg-[#E2E8F0]">
              <div
                className={`col-span-1 h-full w-full rounded-lg ${
                  currentTab === tab?.key && 'bg-[#0698E5]'
                } `}
              />
            </div>
            {/* <button
              className={`mt-10 text-left text-2xl font-[600] ${
                currentTab === tab?.key && 'text-[#0698E5]'
              }`}
              type="button"
              id={tab?.key}
              disabled={currentTab === tab?.key}
              onClick={() => setCurrentTab(tab?.key)}
            >
              {tab.title}
            </button> */}
          </div>
        ))}
      </div>
      <div className="mt-10">
        {Items?.map(
          (tab: any) =>
            currentTab === tab?.key && (
              <div
                className="bg-gradient-comming-soon flex flex-col rounded-3xl max-xl:justify-between"
                key={`${tab?.key}imageNex`}
              >
                <div className="flex justify-center py-10">
                  <Image
                    src={tab.image}
                    width={200}
                    height={200}
                    alt="item.image"
                  />
                </div>
                <div className="rounded-3xl bg-[#0A083A] p-10 text-center text-3xl font-bold text-white max-2xl:text-xl max-xl:p-5 max-xl:text-lg">
                  {tab.title}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );

  return (
    <div className="relative mt-20 pb-40">
      <Image
        src={Background_Soon}
        width={1920}
        height={1080}
        alt="Background_Soon"
        className="absolute z-0 h-full"
      />
      <div className="relative z-10 flex flex-col">
        <div className=" py-28 text-center text-5xl max-md:px-5 max-md:py-11 max-md:!text-xl">
          <div className="font-semibold text-[#0698E5]  max-md:text-left max-md:font-bold">
            Coming next
          </div>
          <div className="font-semibold max-md:text-left">
            An one-stop-shop for ShopName
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid w-2/3 grid-cols-3 gap-10 max-md:hidden">
            {Items?.map((item: any) => {
              return (
                <div
                  className="bg-gradient-comming-soon flex flex-col rounded-3xl max-xl:justify-between"
                  key={item}
                >
                  <div className="flex justify-center py-10">
                    <Image
                      src={item.image}
                      width={200}
                      height={200}
                      alt="item.image"
                    />
                  </div>
                  <div className="rounded-3xl bg-[#0A083A] p-10 text-center text-3xl font-bold text-white max-2xl:text-xl max-xl:p-5 max-xl:text-lg">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden w-full px-5 max-md:!block">{renderTab}</div>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
