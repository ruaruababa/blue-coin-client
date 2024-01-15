import React, { useState } from 'react';

const Tab = {
  All: 'all',
  BCF: 'bcf',
  GFT: 'gft',
  USDT: 'usdt',
};

const StatusTab = {
  Live: 'live',
  Finish: 'finish',
};

const FilterBar = () => {
  const [currentTab, setCurrentTab] = useState(Tab?.All);
  const [currentStatusTab, setCurrentStatusTab] = useState(StatusTab?.Live);

  const coinTypes = [
    {
      name: 'All',
      key: 'all',
    },
    {
      name: 'BCF',
      key: 'bcf',
    },
    {
      name: 'GFT',
      key: 'gft',
    },
    {
      name: 'USDT',
      key: 'usd',
    },
  ];

  const statusTypes = [
    {
      name: 'Live',
      key: 'live',
    },
    {
      name: 'Finish',
      key: 'finish',
    },
  ];

  return (
    <div>
      <div className="flex items-baseline justify-between px-5 py-10 max-md:flex-col max-md:gap-3">
        <div className="flex gap-5 max-md:w-full max-md:flex-col max-md:gap-2">
          <div className="text-base font-semibold">Staking token</div>
          <div className="grid grid-cols-4">
            {coinTypes.map((coin: any) => {
              return (
                <div
                  className={`cursor-pointer rounded-full px-3 text-center text-base font-semibold ${
                    currentTab === coin?.key &&
                    'bg-gradient-to-r from-[#0698E5]/80 from-100% to-[#347CCF]/60 to-100% text-white'
                  }`}
                  key={coin?.key}
                  onClick={() => setCurrentTab(coin?.key)}
                  role="presentation"
                >
                  {coin?.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 max-md:w-full max-md:justify-between">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center">
              <input type="checkbox" className="h-[20px] w-[20px]" />
            </div>
            <div className="text-base font-semibold">Staked only</div>
          </div>
          <div className="flex">
            {statusTypes?.map((status: any) => {
              return (
                <div
                  className={`cursor-pointer rounded-full px-3 text-xl font-semibold ${
                    currentStatusTab === status?.key &&
                    'bg-gradient-to-r from-[#0698E5]/80 from-100% to-[#347CCF]/60 to-100% text-white'
                  }`}
                  key={status?.key}
                  onClick={() => setCurrentStatusTab(status?.key)}
                  role="presentation"
                >
                  {status?.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
