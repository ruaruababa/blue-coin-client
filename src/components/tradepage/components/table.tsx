import Image from 'next/image';
import React, { useState } from 'react';

import ArrowDown from '@/components/icon/arrown_down_svg';
import ArrownUp from '@/components/icon/arrown_up_svg';
import DuplicateLogo from '@/components/icon/duplicateLogo_icon';
import LogoCoin from '@/public/assets/images/Logo.png';
import TickedCirle from '@/public/assets/images/tick-circle.png';

import DropdownItem from './dropdownItem';
import FilterBar from './filterBar';

const Dropdown = ({
  setSelectedItem,
  selectedItem,
  data,
  setShowDetail,
  showDetail,
}: any) => {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={() => {
        setSelectedItem(data);
        if (showDetail) {
          setShowDetail(false);
          setShowDetail(true);
        } else {
          setShowDetail(true);
        }
        if (showDetail && data?.key === selectedItem?.key) {
          setShowDetail(false);
        }
      }}
    >
      {data?.key === selectedItem?.key && showDetail ? (
        <ArrownUp />
      ) : (
        <ArrowDown />
      )}
    </button>
  );
};

const TableContent = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showDetail, setShowDetail] = useState(false);

  const item = (index: any) => {
    return {
      key: `first_item ${index}`,
      token: 'BCF',
      staked: '0',
      interest: '0',
      tvl: '0',
      lookingTime: '36 months',
      apr: '60%',
    };
  };

  const mockData = [];

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 10; index++) {
    mockData.push(item(index));
  }

  return (
    <div className="relative z-10 flex justify-center">
      <div className="flex w-2/3 flex-col max-md:w-full">
        {' '}
        <FilterBar />
        {/* ----------------table----------------- */}
        <div className="">
          {/* ----------------table header----------------- */}
          <div className="grid grid-cols-12 rounded-t-2xl bg-[#E2E8F0]/30 px-5 py-3 text-base  font-semibold uppercase">
            <div className="col-span-5 max-md:col-span-4">
              <div className="">Token</div>
            </div>
            <div className="col-span-7 max-md:col-span-8">
              <div className="grid grid-cols-5 justify-items-center max-md:grid-cols-2">
                <div className="max-md:hidden">STAKED</div>
                <div className="max-md:hidden">INTEREST</div>
                <div className="max-md:hidden">TVL</div>
                <div className="">LOOKING TIME</div>
                <div className="">APR</div>
              </div>
            </div>
          </div>
          {/* ----------------table body----------------- */}
          <div className="rounded-b-2xl bg-white pb-5">
            {mockData?.map((data: any) => {
              return (
                <div className="" key={data?.key}>
                  <div className="grid grid-cols-12 rounded-t-lg px-5 py-3 text-base font-semibold">
                    <div className="col-span-5 max-md:col-span-4">
                      <div className="flex items-center gap-3">
                        <div className="">
                          <DuplicateLogo />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            {' '}
                            <div className="">{data?.token}</div>
                            <div className="">
                              <Image src={TickedCirle} alt="TickedCirle" />
                            </div>
                          </div>
                          <div className="text-xs text-[#94A3B8]">Earn BCF</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-7 max-md:col-span-8">
                      <div className="grid h-full grid-cols-5 items-center justify-items-center max-md:grid-cols-2">
                        <div className="flex flex-col max-md:hidden">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <Image src={LogoCoin} alt="LogoCoin" />
                            </div>
                            <div className="text-xl">{data?.interest}</div>
                          </div>
                          <div className="text-sm text-[#94A3B8]">
                            ~ {data?.interest} USD
                          </div>
                        </div>
                        <div className="flex flex-col max-md:hidden">
                          <div className="flex items-center gap-2">
                            <div className="">
                              <Image src={LogoCoin} alt="LogoCoin" />
                            </div>
                            <div className="text-xl">{data?.staked}</div>
                          </div>
                          <div className="text-sm text-[#94A3B8]">
                            ~ {data?.staked} USD
                          </div>
                        </div>
                        <div className="text-xl max-md:hidden">{data?.tvl}</div>
                        <div className="text-xl">{data?.lookingTime}</div>
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-xl text-[#36D9FF]">
                            {data?.apr}
                          </span>
                          <Dropdown
                            setSelectedItem={setSelectedItem}
                            selectedItem={selectedItem}
                            setShowDetail={setShowDetail}
                            showDetail={showDetail}
                            data={data}
                            key={`dropdwon${data?.key}`}
                          />
                          {/* <button
                            type="button"
                            className="cursor-pointer"
                            onClick={() => {
                              setShowDetail((pre) => !pre);
                              setSelectedItem(data);
                            }}
                          >
                            {data?.key === selectedItem?.key && showDetail ? (
                              <ArrownUp />
                            ) : (
                              <ArrowDown />
                            )}
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {showDetail && selectedItem?.key === data?.key && (
                    <DropdownItem key={`dropdownItem${data?.key}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableContent;
