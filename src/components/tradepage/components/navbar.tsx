import Image from 'next/image';
import React from 'react';

import MenuIcon from '@/components/icon/menu';
import Background from '@/public/assets/images/background_comming_soon.png';
import Logo from '@/public/assets/images/logo_web.png';
import Wallet from '@/public/assets/images/wallet-icon.svg';

const Navbar = () => {
  const Menus = [
    'BlueCoinDEX',
    'BlueCoinValut',
    'BlueCoinNFT',
    'BlueCoinVerse',
  ];

  const wallet = (
    <div className="flex justify-center gap-2 rounded-xl bg-[#0698E5] p-3">
      <Image src={Wallet} alt="Logo" />

      <span className="text-base font-semibold text-white">Connect Wallet</span>
    </div>
  );

  const currentMenu = 'BlueCoinDEX';

  const menu = (
    <div className="z-50 grid grid-cols-5 max-md:hidden max-md:flex-col max-md:group-hover:flex">
      {Menus?.map((item: any) => {
        return (
          <div className="flex items-center justify-center" key={item}>
            <div
              className={`rounded-xl px-6 py-3 text-xl  font-semibold  ${
                currentMenu === item &&
                ' bg-gradient-to-r from-[#36D9FF]/90 from-10% to-[#00E5C2]/40 to-100% text-[#347CCF]'
              }`}
            >
              {item}
            </div>
          </div>
        );
      })}
      {wallet}
    </div>
  );

  return (
    <div className="relative w-full">
      <Image
        src={Background}
        alt="Logo"
        className="absolute z-0 h-[2000px] max-md:h-[1000px]"
      />

      <div className="relative z-10 px-10 py-5 max-md:px-5">
        <div className="grid grid-cols-12">
          <div className="col-span-5 max-md:absolute">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="col-span-7 max-md:col-span-12 max-md:flex max-md:flex-col-reverse">
            {menu}
            <div className="hidden justify-end gap-3 max-md:flex">
              {' '}
              <div className="flex items-center justify-center rounded-xl bg-[#0698E5] px-3">
                <Image src={Wallet} alt="Logo" className="navbar-mobile" />
              </div>
              <MenuIcon className="group hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
