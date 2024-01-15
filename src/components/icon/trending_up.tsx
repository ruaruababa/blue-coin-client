import type { SVGProps } from 'react';
import * as React from 'react';

const TrendingUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <g fill="#fff" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
      <path d="M11.854 2.646a.5.5 0 0 1 0 .708l-4.75 4.75a.5.5 0 0 1-.708 0L4.25 5.957.854 9.354a.5.5 0 1 1-.708-.708l3.75-3.75a.5.5 0 0 1 .708 0L6.75 7.043l4.396-4.397a.5.5 0 0 1 .708 0Z" />
      <path d="M8 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V3.5H8.5A.5.5 0 0 1 8 3Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TrendingUpIcon;
