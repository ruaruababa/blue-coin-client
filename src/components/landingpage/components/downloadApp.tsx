import Image from 'next/image';
import React from 'react';

import LogoWeb from '@/components/icon/logo_web';
import Google_Play from '@/public/assets/images/android_store_download.png';
import DownloadApp_Image from '@/public/assets/images/app_download.png';
import Appstore_Img from '@/public/assets/images/apple_store_download.png';
import Bg_DownloadApp from '@/public/assets/images/background_download_app.png';
import Bg_Download_Mobile from '@/public/assets/images/background_download_mobile.png';
import Logo from '@/public/assets/images/logo_web.png';

const DownloadApp = () => {
  return (
    <>
      <div className="flex justify-center mt-10 max-md:hidden">
        <div className="relative w-2/3 gap-5">
          <div className="absolute bottom-0 z-0 w-full">
            <Image
              src={Bg_DownloadApp}
              height={1920}
              width={1080}
              alt="Bg-Bg_DownloadApp"
              className="flex justify-center w-full"
            />
          </div>

          <div className="relative grid grid-cols-2">
            <div className="flex flex-col justify-end">
              {' '}
              <Image
                src={DownloadApp_Image}
                alt="Bg-DownloadApp"
                className=" z-10 flex !w-[100%] flex-col justify-end"
              />
            </div>
            <div className="z-10 flex items-center justify-center">
              <div className="flex flex-col gap-5 mt-20">
                <div className="">
                  <LogoWeb />
                </div>
                <div className="flex flex-col gap-14 max-xl:gap-5">
                  <div className="text-5xl font-bold max-2xl:!text-3xl">
                    Try Social Wallet <br /> in Web 3.0
                  </div>
                  <div className="">
                    <div className="flex gap-5">
                      <div className="cursor-pointer">
                        {' '}
                        <Image
                          src={Google_Play}
                          width={130}
                          alt="Bg-Google_Play"
                        />
                      </div>
                      <div className="cursor-pointer">
                        {' '}
                        <Image
                          src={Appstore_Img}
                          width={130}
                          alt="Bg-Appstore_Img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-full px-5 py-10 overflow-hidden max-md:block">
        <div className="absolute left-[50%] top-[15%] translate-x-[-50%]">
          <div className="flex flex-col justify-center w-full gap-5">
            <div className="">
              <Image src={Logo} alt="Bg-Logo" />{' '}
            </div>
            <div className="flex flex-col gap-14 max-xl:gap-5">
              <div className="text-5xl font-bold max-2xl:!text-3xl">
                Try Social Wallet <br /> in Web 3.0
              </div>
              <div className="">
                <div className="flex gap-5">
                  <div className="cursor-pointer">
                    {' '}
                    <Image src={Google_Play} width={130} alt="Bg-Google_Play" />
                  </div>
                  <div className="cursor-pointer">
                    {' '}
                    <Image
                      src={Appstore_Img}
                      width={130}
                      alt="Bg-Appstore_Img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={Bg_Download_Mobile}
          alt="Bg-Bg_DownloadApp"
          className="flex justify-center w-full"
        />
        <div className="absolute bottom-[10%] overflow-hidden">
          {' '}
          <Image src={DownloadApp_Image} alt="Bg-DownloadApp" />
        </div>
      </div>
    </>
  );
};

export default DownloadApp;
