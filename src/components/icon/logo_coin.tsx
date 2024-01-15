import type { SVGProps } from 'react';
import * as React from 'react';

const LogoCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={10} cy={10} r={8} fill="url(#b)" />
    </g>
    <circle cx={10} cy={10} r={9} stroke="#fff" strokeWidth={2} />
    <path
      fill="#fff"
      d="M13.794 8.969a.432.432 0 0 1-.403-.279 3.644 3.644 0 0 0-2.179-2.117.433.433 0 1 1 .29-.817 4.51 4.51 0 0 1 2.697 2.623.433.433 0 0 1-.405.59ZM8.157 10.498a.27.27 0 0 1 .251.173 2.28 2.28 0 0 0 1.356 1.318.27.27 0 0 1-.18.508 2.808 2.808 0 0 1-1.68-1.632.27.27 0 0 1 .253-.367Z"
    />
    <path
      fill="#fff"
      d="M14.067 9.566a.433.433 0 0 0-.434.433 3.632 3.632 0 0 1-7.24.434H7.85a.404.404 0 0 0 .404-.404c0-.957.756-1.757 1.712-1.775a1.746 1.746 0 0 1 .442 3.443v.885a2.613 2.613 0 1 0-2.984-3.014h-1.03A3.638 3.638 0 0 1 10 6.367a.433.433 0 0 0 0-.867 4.5 4.5 0 1 0 4.5 4.5.433.433 0 0 0-.433-.434Z"
    />
    <path
      fill="#fff"
      d="M9.604 8.451h.31a.39.39 0 0 1 .39.39v.616a1.074 1.074 0 1 1-1.292 1.533.35.35 0 0 1 .305-.518.35.35 0 0 1 .309.176.372.372 0 1 0 .324-.548h-.2a.153.153 0 0 1-.152-.153l.006-1.496ZM14.5 10a.433.433 0 1 0-.867 0 3.631 3.631 0 0 1-4.421 3.546c-.464.184-.95.305-1.446.358A4.498 4.498 0 0 0 14.5 9.999Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={10}
        x2={10}
        y1={2}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0698E6" />
        <stop offset={1} stopColor="#347CCF" />
      </linearGradient>
      <filter
        id="a"
        width={20}
        height={24}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1717_2090" />
      </filter>
    </defs>
  </svg>
);
export default LogoCoin;
