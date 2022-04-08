import React from 'react';
type ArrowRightProps = {
  color?: string | false;
};

const ArrowRight: React.FC<ArrowRightProps> = ({ color }) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.5392 13.5391L31.0001 21.9999L22.5392 30.4608"
        stroke={color || '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.9999 22L13 22"
        stroke={color || '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="0.5" y="0.5" width="43" height="43" rx="11.5" stroke={color || '#fff'} />
    </svg>
  );
};

export default ArrowRight;
