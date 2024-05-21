'use client';

import React from 'react';
import Button from './Button';
import { usePathname } from 'next/navigation';

export default function SubmitApplicationButton() {
  const pathname = usePathname();

  return (
    <div
      className={`${
        pathname === '/' ? 'hidden' : ''
      } fixed right-0 lg:right-20 top-[90%] shrink-0 bg-white shadow rounded-10 p-4`}
    >
      <Button red>Оставить заявку</Button>
    </div>
  );
}
