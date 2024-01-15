import type { SVGProps } from 'react';
import * as React from 'react';

const CoinLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={20} cy={16} r={16} fill="url(#b)" />
    </g>
    <path
      fill="#fff"
      d="M27.589 13.938a.865.865 0 0 1-.807-.557 7.287 7.287 0 0 0-4.357-4.235.867.867 0 0 1 .578-1.635 9.02 9.02 0 0 1 5.395 5.247.867.867 0 0 1-.81 1.18ZM16.313 16.996a.54.54 0 0 1 .504.345c.213.556.535 1.063.947 1.493a4.558 4.558 0 0 0 1.764 1.143.539.539 0 0 1-.36 1.017 5.616 5.616 0 0 1-3.358-3.264.539.539 0 0 1 .503-.734Z"
    />
    <path
      fill="#fff"
      d="M28.133 15.132a.867.867 0 0 0-.866.867 7.264 7.264 0 0 1-14.48.866H15.7a.807.807 0 0 0 .808-.807c0-1.913 1.512-3.514 3.424-3.55a3.492 3.492 0 0 1 .884 6.887v1.77a5.225 5.225 0 1 0-5.967-6.029h-2.063A7.276 7.276 0 0 1 20 8.733.866.866 0 0 0 20 7a9 9 0 1 0 9 8.999.867.867 0 0 0-.867-.867Z"
    />
    <path
      fill="#fff"
      d="M19.208 12.902h.622a.778.778 0 0 1 .778.779v1.233a2.148 2.148 0 1 1-2.584 3.067.7.7 0 0 1 .611-1.038.699.699 0 0 1 .616.353.742.742 0 0 0 1.398-.348.743.743 0 0 0-.75-.748h-.398a.305.305 0 0 1-.304-.305l.011-2.993ZM29 15.999a.867.867 0 0 0-1.733 0 7.266 7.266 0 0 1-8.843 7.094c-.927.368-1.9.608-2.893.715a8.995 8.995 0 0 0 13.47-7.81Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={28.944}
        x2={14.095}
        y1={1.419}
        y2={36.276}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#36D9FF" />
        <stop offset={1} stopColor="#5900DB" />
      </linearGradient>
      <filter
        id="a"
        width={40}
        height={41}
        x={0}
        y={-1}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1401_108754"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1401_108754"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect2_innerShadow_1401_108754" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={-1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.0766667 0 0 0 0 0.0966 0 0 0 0 0.575 0 0 0 0.55 0" />
        <feBlend
          in2="effect2_innerShadow_1401_108754"
          result="effect3_innerShadow_1401_108754"
        />
      </filter>
    </defs>
  </svg>
);
export default CoinLogo;
