import React from 'react';
import Image from "next/image";

export default function Logo() {
  return (
    <div className="h-12 w-fit relative z-10 mx-auto group flex items-center gap-2 bg-white text-sm font-bold rounded-full mt-12 px-4">
      <Image src="/assets/favicon.svg" alt="logo" width={16}height={16}/>
      <span>JapanAutoBase</span>
    </div>
  );
}
