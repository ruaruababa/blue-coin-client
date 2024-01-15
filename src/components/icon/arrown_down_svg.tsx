import type { SVGProps } from 'react';
import * as React from 'react';

const ArrownDown= (props: SVGProps<SVGSVGElement>) => (
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
      d="M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrownDown;
