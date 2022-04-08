import React from 'react';
type ArrowLeftProps = {
  color?: string | false;
};

const ArrowLeft: React.FC<ArrowLeftProps> = ({ color }) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.4609 13.5391L13.0001 21.9999L21.4609 30.4608"
        stroke={color || '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0001 22L31 22"
        stroke={color || '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="-0.5"
        y="0.5"
        width="43"
        height="43"
        rx="11.5"
        transform="matrix(-1 0 0 1 43 0)"
        stroke={color || '#fff'}
      />
    </svg>
  );
};

export default ArrowLeft;
