import Image from 'next/image';
import React from 'react';

import Email from '@/public/assets/images/email.svg';
import Logo from '@/public/assets/images/logo_web.png';
import Medium from '@/public/assets/images/medium.svg';
import Telegram from '@/public/assets/images/telegram.svg';
import Telegram_Group from '@/public/assets/images/telegram-group.svg';
import Twitter from '@/public/assets/images/twitter.svg';
import Youtobe from '@/public/assets/images/youtube.svg';

const Footer = () => {
  const mockFooter = [
    {
      title: 'BlueCoin Finance',
      content: [
        'BlueCoin Web',
        'BlueCoin IOS',
        'BlueCoin Android',
        'Dex',
        'Investment',
      ],
    },
    {
      title: 'Company',
      content: ['Brand Assets'],
    },
    {
      title: 'Legal',
      content: ['Privacy', 'Terms', 'Cookie Policy', 'CCPA'],
    },
    {
      title: 'Support',
      content: ['Help Center'],
    },
  ];

  const contactList = [
    Telegram,
    Telegram_Group,
    Twitter,
    Youtobe,
    Medium,
    Email,
  ];

  return (
    <div className="flex justify-center py-20">
      <div className={`grid w-2/3 grid-cols-3 flex-col gap-10 max-md:!flex `}>
        <div className="flex flex-col gap-5 max-md:items-center">
          <div className="w-fit">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="flex w-[190px] justify-between">
            {contactList?.map((item: any) => {
              return <Image src={item} alt={`${item}`} key={item} />;
            })}
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-4 flex-col  gap-10 max-md:!flex">
          {mockFooter?.map((item: any) => {
            return (
              <div
                className="flex w-full flex-col gap-5 max-md:text-center"
                key={item}
              >
                <div className="text-[20px] font-bold text-[#0698E5]">
                  {item?.title}
                </div>
                <div className="flex flex-col gap-2">
                  {item?.content?.map((content: any) => {
                    return (
                      <div
                        className="text-base font-semibold max-md:text-center"
                        key={content}
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
