import Image from 'next/image';
import React from 'react';

import ShieldIcon from '@/public/assets/images/shield-tick.png';

import ConnectWalletItem from './connectWalletItem';

// const FeatureTypes = {
//   MyStake: 'my_stake',
//   AvailableForWithdrawal: 'available_for_withdrawal',
//   MyEarnings: 'my_earnings',
// };

const DropdownItem = () => {
  const coinFeatures = [
    {
      key: 'my_stake',
      name: 'YOU STAKED BCH',
      amount: '500',
      value: '10000',
      addres: '0x1234567890abcdef',
    },
    {
      key: 'available_for_withdrawal',
      name: 'AVAILABLE FOR WITHDRAW',
      amount: '500',
      value: '300',
      addres: '0x1234567890abcdef',
    },
    {
      key: 'my_eanings',
      amount: '500',
      name: 'YOU STAKED BCH',
      value: '500',
      addres: '0x1234567890abcdef',
    },
  ];

  return (
    <div className="bg-[#F1F4F9] py-3">
      <div className="grid grid-cols-12 rounded-t-lg px-5 py-3 font-semibold max-md:flex max-md:flex-col max-md:gap-5">
        <div className="col-span-5">
          <div className="flex flex-col gap-5 max-md:text-center">
            <div className="text-xs text-[#64748B]">Total staked</div>
            <div className="text-xl font-bold text-[#0F1A2A]">$ 0</div>
            <div className="flex flex-col gap-2">
              <div className="text-xs text-[#0698E5]">Buy BCF</div>
              <div className="text-xs text-[#0698E5]">View contract</div>
            </div>
            <div className="justify-center max-md:flex">
              <div className="flex w-fit gap-2 rounded-full bg-[#D2FADB] px-3 py-1">
                <div className="">
                  <Image src={ShieldIcon} alt="ShieldIcon" />
                </div>
                <div className="text-xs text-[#29CF58]">Active</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <div className="grid grid-cols-3 gap-10 max-md:flex max-md:flex-col">
            {coinFeatures?.map((item: any) => {
              return <ConnectWalletItem item={item} key={item?.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownItem;
