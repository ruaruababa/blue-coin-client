import type { SVGProps } from 'react';
import * as React from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g fill="#141414" fillRule="evenodd" clipRule="evenodd">
      <path d="M6.667 20c0-.92.597-1.667 1.333-1.667h24c.736 0 1.333.747 1.333 1.667s-.597 1.667-1.333 1.667H8c-.736 0-1.333-.747-1.333-1.667ZM6.667 11.667C6.667 10.747 7.264 10 8 10h24c.736 0 1.333.746 1.333 1.667 0 .92-.597 1.666-1.333 1.666H8c-.736 0-1.333-.746-1.333-1.666ZM13.333 28.333c0-.92.597-1.666 1.334-1.666H32c.736 0 1.333.746 1.333 1.666 0 .92-.597 1.667-1.333 1.667H14.667c-.737 0-1.334-.746-1.334-1.667Z" />
    </g>
  </svg>
);
export default MenuIcon;
