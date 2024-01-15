import type { SVGProps } from 'react';
import * as React from 'react';

const DuplicateLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={16} cy={23} r={16} fill="url(#b)" />
    </g>
    <path
      fill="#fff"
      d="M23.589 20.938a.865.865 0 0 1-.807-.557 7.29 7.29 0 0 0-4.357-4.235.867.867 0 1 1 .578-1.635 9.017 9.017 0 0 1 5.395 5.247.867.867 0 0 1-.81 1.18ZM12.313 23.996a.54.54 0 0 1 .504.345c.213.556.535 1.063.947 1.493a4.558 4.558 0 0 0 1.764 1.143.54.54 0 0 1-.36 1.017 5.615 5.615 0 0 1-3.358-3.264.54.54 0 0 1 .503-.734Z"
    />
    <path
      fill="#fff"
      d="M24.133 22.132a.867.867 0 0 0-.866.867 7.264 7.264 0 0 1-14.48.866H11.7a.807.807 0 0 0 .808-.807c0-1.913 1.512-3.514 3.424-3.55a3.492 3.492 0 0 1 .884 6.887v1.77a5.225 5.225 0 1 0-5.967-6.029H8.786A7.276 7.276 0 0 1 16 15.733.867.867 0 0 0 16 14a9 9 0 1 0 9 8.999.867.867 0 0 0-.867-.867Z"
    />
    <path
      fill="#fff"
      d="M15.208 19.902h.622a.778.778 0 0 1 .778.779v1.233a2.148 2.148 0 1 1-2.584 3.067.7.7 0 0 1 .61-1.038.698.698 0 0 1 .617.353.743.743 0 1 0 .649-1.096H15.5a.305.305 0 0 1-.304-.305l.011-2.993ZM25 22.999a.867.867 0 0 0-1.733 0 7.266 7.266 0 0 1-8.843 7.094c-.927.368-1.9.608-2.893.715a8.995 8.995 0 0 0 13.47-7.81Z"
    />
    <g filter="url(#c)">
      <circle cx={29} cy={10} r={8} fill="url(#d)" />
    </g>
    <circle cx={29} cy={10} r={9} stroke="#fff" strokeWidth={2} />
    <path
      fill="#fff"
      d="M32.794 8.969a.432.432 0 0 1-.403-.279 3.644 3.644 0 0 0-2.179-2.117.433.433 0 1 1 .29-.817 4.509 4.509 0 0 1 2.697 2.623.433.433 0 0 1-.405.59ZM27.157 10.498a.27.27 0 0 1 .251.173 2.28 2.28 0 0 0 1.356 1.318.27.27 0 0 1-.18.508 2.808 2.808 0 0 1-1.679-1.632.27.27 0 0 1 .252-.367Z"
    />
    <path
      fill="#fff"
      d="M33.067 9.566a.433.433 0 0 0-.434.433 3.632 3.632 0 0 1-7.24.434h1.457a.404.404 0 0 0 .404-.404c0-.957.756-1.757 1.712-1.775a1.746 1.746 0 0 1 .442 3.443v.885a2.613 2.613 0 1 0-2.984-3.014h-1.03A3.638 3.638 0 0 1 29 6.367a.433.433 0 0 0 0-.867 4.5 4.5 0 1 0 4.5 4.5.433.433 0 0 0-.433-.434Z"
    />
    <path
      fill="#fff"
      d="M28.604 8.451h.31a.39.39 0 0 1 .39.39v.616a1.074 1.074 0 1 1-1.292 1.533.349.349 0 0 1 .305-.518.35.35 0 0 1 .308.176.373.373 0 0 0 .648.013.372.372 0 0 0-.323-.561h-.2a.153.153 0 0 1-.152-.153l.006-1.496ZM33.5 10a.433.433 0 1 0-.867 0 3.631 3.631 0 0 1-4.421 3.546c-.464.184-.95.305-1.446.358A4.498 4.498 0 0 0 33.5 9.999Z"
    />
    <defs>
      <linearGradient
        id="b"
        x1={16}
        x2={16}
        y1={7}
        y2={39}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0698E6" />
        <stop offset={1} stopColor="#347CCF" />
      </linearGradient>
      <linearGradient
        id="d"
        x1={29}
        x2={29}
        y1={2}
        y2={18}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0698E6" />
        <stop offset={1} stopColor="#347CCF" />
      </linearGradient>
      <filter
        id="a"
        width={32}
        height={36}
        x={0}
        y={7}
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
        <feBlend in2="shape" result="effect1_innerShadow_1717_2064" />
      </filter>
      <filter
        id="c"
        width={20}
        height={24}
        x={19}
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
        <feBlend in2="shape" result="effect1_innerShadow_1717_2064" />
      </filter>
    </defs>
  </svg>
);
export default DuplicateLogo;
