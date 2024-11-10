"use client";
import { useState } from "react";
import Image from "next/image";
import { Modal } from "./Modal";
interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  canExpand?: boolean;
}

export default function ImageOrError(props: Props) {
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isError) {
    return (
      <div className="w-full h-full flex justify-center items-center min-h-[150px] ">
        <h3 className="text-gray-400">Нет картинки</h3>
      </div>
    );
  }

  return (
    <>
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        onError={() => setIsError(true)}
        onClick={() => setIsModalOpen(true)}
        className={props.className}
      />
      {props.canExpand && (
        <Modal open={isModalOpen} setOpen={setIsModalOpen}>
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            onError={() => setIsError(true)}
            onClick={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
