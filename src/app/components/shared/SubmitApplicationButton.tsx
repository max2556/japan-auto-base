'use client';

import React, { useState } from 'react';
import Button from './Button';
import { usePathname } from 'next/navigation';
import { SubmitDialog } from './SubmitDialog';

export default function SubmitApplicationButton() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`${
        pathname === '/' ? 'hidden' : ''
      } fixed right-0 lg:right-20 top-[90%] shrink-0 bg-white shadow rounded-10 p-4`}
    >
      <Button red onClick={() => setShowModal(!showModal)}>Оставить заявку</Button>
      <SubmitDialog open={showModal} setOpen={setShowModal} />
    </div>
  );
}
