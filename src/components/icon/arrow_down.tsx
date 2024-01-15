import type { SVGProps } from 'react';
import * as React from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81v8.37C2.5 19.83 4.67 22 8.31 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.5 4.17 20.33 2 16.69 2Zm.63 12.24-4.29 4.29a.747.747 0 0 1-1.06 0l-4.29-4.29a.75.75 0 1 1 1.06-1.06l3.01 3.01V6a.75.75 0 1 1 1.5 0v10.19l3.01-3.01a.754.754 0 0 1 1.223.243.74.74 0 0 1 .057.287.767.767 0 0 1-.22.53Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12.495}
        x2={12.495}
        y1={2}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0698E6" />
        <stop offset={1} stopColor="#347CCF" />
      </linearGradient>
    </defs>
  </svg>
);
export default ArrowDownIcon;
