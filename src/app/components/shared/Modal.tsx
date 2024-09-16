import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: HTMLAttributes<HTMLElement>["className"];
}

interface InternalModalProps extends ModalProps {
  children: React.ReactNode;
}

export function Modal({ open, setOpen, children }: InternalModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogBody = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pageBody, setPageBody] = useState<HTMLBodyElement | null>(null);

  useEffect(() => {
    if (!dialog.current) return;

    if (open) {
      dialog.current?.showModal();
      setIsVisible(true);
    }
    if (!open) {
      dialog.current?.close();
      setIsVisible(false);
    }
  }, [open]);

  useEffect(() => {
    if (!dialog.current || !dialogBody.current) return;

    const windowListener = (e: MouseEvent) => {
      if (!isVisible) return;
      if (!dialogBody.current?.contains(e.target as Node)) setOpen(false);
    };

    window.addEventListener("click", windowListener);

    return () => {
      window.removeEventListener("click", windowListener);
    };
  }, [isVisible, open, setOpen]);

  useEffect(() => {
    setPageBody(document.body as HTMLBodyElement);
  }, [pageBody]);

  if (!pageBody) return null;

  return createPortal(
    <div className="z-10 relative w-full h-full">
      <dialog ref={dialog}>
        <div ref={dialogBody}>{children}</div>
      </dialog>
    </div>,
    pageBody
  );
}
