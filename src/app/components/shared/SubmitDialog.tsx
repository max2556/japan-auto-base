'use client';
import { postConsultation } from "@/app/services/consultations";
import Button from "./Button";
import { ModalProps, Modal } from "./Modal";
import { useState } from "react";

export function SubmitDialog({ open, setOpen }: ModalProps) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  
  const transformPhone = (phone: string) => phone.replace(' ', '').replace(')', '').replace('(', '').replace('-', '');
  const validatePhoneNumber = (number: string) => {
    const phonePattern = /^\+7\d{3}\d{3}\d{2}\d{2}$/;
    const res = phonePattern.test(transformPhone(number));
    if (!res) {
      setError("Введите правильный номер телефона");
      return false;
    } else {
      setError(""); // Clear any previous error
    }
    return true
  };
  
  const onChangePhone = (v: string) => {
    setPhone(v)
    if (error !== '' && error !== undefined) {
      validatePhoneNumber(v)
    }
  }

  const onclick = () => {
    if (!validatePhoneNumber(phone)) {
      return;
    }
    setOpen(false);
    postConsultation(phone);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="p-4 flex flex-col">
        <h2 className="mb-2">Оставьте заявку!</h2>
        <p className="text-sm leading-4 mb-1">Ваш номер телефона</p>
        <input
          className={`p-1 ${error ? 'border border-red-500' : ''}`}
          type="tel"
          placeholder="+7 (___) ___-__-__"
          name="phone"
          value={phone}
          onChange={(e) => onChangePhone(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1 w-[170px]">{error}</p>}
        <Button red onClick={() => onclick()} className="mx-4 mt-2">
          Отправить
        </Button>
      </div>
    </Modal>
  );
}
