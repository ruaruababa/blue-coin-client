import type { SVGProps } from 'react';
import * as React from 'react';

const ArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M6.293.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L7 2.414 1.707 7.707A1 1 0 0 1 .293 6.293l6-6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowUp;
