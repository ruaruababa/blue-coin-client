import Image from 'next/image';
import React from 'react';

import LogoCoin from '@/public/assets/images/Logo.png';
import Wallet from '@/public/assets/images/wallet-icon.svg';

interface Props {
  item: any;
}

const ConnectWalletItem = (props: Props) => {
  const { item } = props;

  const wallet = (
    <div className="flex justify-center gap-2 rounded-xl bg-[#0698E5] p-3">
      <Image src={Wallet} alt="Logo" />

      <span className="text-base font-semibold text-white">Connect Wallet</span>
    </div>
  );

  return (
    <div className="rounded-3xl bg-white px-5 py-3">
      <div className="flex flex-col gap-3 text-center">
        <div className="text-xs">{item?.name}</div>
        <div className="flex items-center justify-center gap-2 text-2xl">
          <div className="">
            <Image src={LogoCoin} alt="LogoCoin" />
          </div>
          <div className="">{item?.amount}</div>
        </div>
        <div className="text-sm text-[#94A3B8]"> ~ {item?.value} USD</div>
        <div className="text-base">{wallet}</div>
      </div>
    </div>
  );
};

export default ConnectWalletItem;
