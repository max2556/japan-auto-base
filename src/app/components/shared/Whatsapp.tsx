"use client";

import { fetchContacts } from "@/app/services/contacts";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Whatsapp() {
  const [phoneNumber, setPhoneNumber] = useState<Nillable<string>>(null);

  useEffect(() => {
    const fetchPhone = async () => {
      const data = await fetchContacts("whats_up");
      if ("value" in data && data.value) setPhoneNumber(data.value);
      else {
        const data = await fetchContacts("phone");
        if ("value" in data && data.value) setPhoneNumber(data.value.split("+")[1]);
      }
    };
    fetchPhone();
  });

  return phoneNumber ? (
    <a href={`https://wa.me/${phoneNumber.replace(" ", "")}`} target="_blank" className="group">
      <Image
        src="/assets/images/icon-whatsapp.png"
        alt="Whatsapp Icon"
        width={24}
        height={24}
        className="group-hover:opacity-80 transition-all duration-200"
      />
    </a>
  ) : (<></>);
}
