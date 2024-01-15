import type { SVGProps } from 'react';
import * as React from 'react';

const BlueChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M6 1a5 5 0 1 0 5 5 5.008 5.008 0 0 0-5-5Zm2.39 3.85L5.555 7.685a.374.374 0 0 1-.53 0L3.61 6.27a.375.375 0 1 1 .53-.53l1.15 1.15 2.57-2.57a.375.375 0 0 1 .53.53Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={6}
        x2={6}
        y1={1}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0698E6" />
        <stop offset={1} stopColor="#347CCF" />
      </linearGradient>
    </defs>
  </svg>
);
export default BlueChecked;
