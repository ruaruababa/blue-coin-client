import Image from 'next/image';
import React from 'react';

import App_Story from '@/public/assets/images/app_demo_mock.png';
import Apple_Watch from '@/public/assets/images/apple_watch.png';
import Avatar from '@/public/assets/images/sample_avatar.png';
import Social_Share from '@/public/assets/images/social_slide.png';

const IntroduceWeb3 = () => {
  const mockList = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    mockList.push(i);
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/3 max-md:w-full max-md:px-5">
        <div className="grid grid-cols-12 py-10">
          <div className="col-span-12 flex flex-col gap-5">
            <div className="text-5xl font-bold max-md:text-4xl">
              Unlock all of Social Web 3.0 today
            </div>
            <div className="text-2xl font-semibold max-md:text-xl">
              Share your thoughts, make new friends, follow friends, and find
              investment opportunities together
            </div>
            {/* ----------------------------Image---------------------- */}
            <div className="flex flex-col gap-10 ">
              <div className="grid grid-cols-12 gap-10 max-md:flex max-md:flex-col">
                <div className="col-span-5 flex  flex-col gap-3 rounded-2xl bg-gradient-to-r from-[#EDF7FE] from-10% via-[#F7F6FD] via-45% to-[#FCFCF2] to-90% p-5 font-semibold max-md:col-span-12 max-md:h-[320px]">
                  <div className="text-3xl text-[#0698E5] max-md:text-2xl">
                    Unique{' '}
                  </div>
                  <div className="text-3xl max-md:text-2xl ">
                    Digital Avatar
                  </div>
                  <div className="group grid grid-cols-7">
                    {mockList?.map((item: any) => (
                      <div className="min-w-[90px] max-md:w-auto" key={item}>
                        <Image
                          src={Avatar}
                          height={90}
                          width={90}
                          alt="Bg-investor"
                          className="rounded-full max-md:h-[50px] max-md:w-[50px] max-md:group-hover:animate-bounce"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl max-xl:text-xl">
                    You can mint your all digital identity right when you create
                    <br /> an App
                  </div>
                </div>
                <div className=" col-span-7 overflow-hidden rounded-2xl  bg-gradient-to-r from-[#EDF7FE] from-10% via-[#F7F6FD] via-45% to-[#FCFCF2] to-90% max-md:col-span-6 max-md:h-[320px] ">
                  <div className="grid h-full grid-cols-12 gap-10 ">
                    <div className="col-span-7 p-5 text-3xl font-semibold max-md:col-span-6 max-md:text-2xl">
                      <div className="text-[#0698E5] max-xl:whitespace-nowrap">
                        Track and get alerts{' '}
                      </div>
                      <div className="max-xl:text-xl">
                        about any other wallets in watch list
                      </div>
                    </div>
                    <div className="relative col-span-5 overflow-hidden max-md:col-span-6">
                      <Image
                        src={Apple_Watch}
                        alt="Bg-Apple_Watch"
                        className="absolute bottom-[-40px] ml-10 animate-apple_watch cursor-pointer transition-all duration-500 max-md:ml-[-15px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-10 max-md:flex max-md:flex-col">
                <div className="col-span-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#EDF7FE] from-10% via-[#F7F6FD] via-45% to-[#FCFCF2] to-90% max-md:col-span-12 max-md:h-[320px]">
                  <div className="p-5 font-semibold ">
                    <div className="text-3xl text-[#0698E5] max-md:text-2xl">
                      Stay connected{' '}
                    </div>
                    <div className="text-3xl max-md:text-2xl">
                      with other platforms
                    </div>
                  </div>
                  <div className="relative flex overflow-x-hidden pt-5">
                    <div className="w-[150%] animate-marquee whitespace-nowrap  max-md:!w-full">
                      <Image
                        src={Social_Share}
                        alt="Bg-Social_Image "
                        className="!max-w-[150%] max-md:w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative col-span-5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#EDF7FE] from-10% via-[#F7F6FD] via-45% to-[#FCFCF2] to-90% max-md:col-span-12 max-md:h-[320px]">
                  <div className="p-5 font-semibold">
                    <div className="text-3xl text-[#0698E5] max-md:text-2xl">
                      Share instant #Finance101{' '}
                    </div>
                    <div className="text-3xl max-md:text-2xl">
                      on Stories with friends
                    </div>
                    <Image
                      src={App_Story}
                      alt="Bg-App_Story "
                      className="absolute animate-roll p-5 transition-all duration-1000 max-md:relative max-md:top-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceWeb3;
