import React, { useState } from 'react';

const Tab = {
  Owner: 'owner',
  Pool: 'staker',
};

const StackingTab = () => {
  const [currentTab, setCurrentTab] = useState(Tab?.Owner);

  return (
    <div className="relative z-10 flex justify-center rounded-xl ">
      <div className="w-2/3 rounded-2xl bg-white max-md:w-full">
        <div className="flex justify-between p-5 max-md:flex-col max-md:gap-3">
          <div className="text-4xl font-semibold max-md:text-2xl">Stacking</div>
          <div className="flex rounded-xl bg-[#F1F4F9]">
            <div
              className={`${
                currentTab === Tab.Owner &&
                ' bg-gradient-to-r from-[#0698E5]/80 from-100% to-[#347CCF]/60 to-100% text-white'
              }  cursor-pointer rounded-xl px-7 py-3 text-xl font-semibold text-[#94A3B8] max-md:text-base`}
              onClick={() => {
                setCurrentTab(Tab.Owner);
              }}
              role="presentation"
            >
              Your Staking
            </div>
            <div
              className={`${
                currentTab === Tab.Pool &&
                ' bg-gradient-to-r from-[#0698E5]/80 from-100% to-[#347CCF]/60 to-100% text-white'
              }  cursor-pointer rounded-xl px-7 py-3 text-xl font-semibold text-[#94A3B8]  max-md:text-base`}
              onClick={() => {
                setCurrentTab(Tab.Pool);
              }}
              role="presentation"
            >
              Staking Pools
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackingTab;
