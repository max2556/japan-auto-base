import React from 'react';

export default function Logo() {
  return (
    <div className="h-12 w-fit relative z-10 mx-auto group flex items-center gap-2 bg-white text-sm font-bold rounded-full mt-12 px-4">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="16" rx="8" fill="#A4031F" />
      </svg>
      <span>JapanAutoBase</span>
    </div>
  );
}
