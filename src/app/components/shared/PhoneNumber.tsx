"use client";

import { fetchContacts } from "@/app/services/contacts";
import { useState, useEffect } from "react";

export interface PhoneNumberProps {
  theme?: "dark" | "light";
}

export default function PhoneNumber({ theme = "light" }: PhoneNumberProps) {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [error, setError] = useState<Nillable<string>>(null);

  const betterDisplay = (phone: string) => {
    return phone
      .replace(/\D/g, "") // Remove all non-numeric characters
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5"); // Format the phone number
  };

  useEffect(() => {
    const fetchPhone = async () => {
      const data = await fetchContacts("phone");
      if ("error" in data) {
        setError(data.error);
      } else {
        setPhoneNumber(data.value);
      }
    };
    fetchPhone();
  }, [error]);

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="group flex items-center gap-2 font-bold"
    >
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* TODO: fix dark hover */}
        <circle
          cx="11.9277"
          cy="11"
          r="11"
          fill={theme == "dark" ? "#0B1736" : "white"}
          className={`fill-brand- ${
            theme == "dark"
              ? "group-hover:fill-brand-dark/80"
              : "group-hover:fill-white/80"
          } transition-all duration-200`}
        />
        <path
          d="M10.3123 8.58033L9.73427 7.1222C9.50304 6.28898 9.10805 6.28897 8.91536 6.28898C8.1928 6.2369 7.82933 6.80974 7.71109 6.96597C7.01743 7.88251 7.19727 9.22261 7.37389 9.77809C8.64561 13.4443 12.0465 15.2982 13.6843 15.6627C16.5264 16.0793 16.5264 13.84 16.6227 13.5797C16.6998 13.3713 16.5264 13.2151 16.4301 13.163C15.9965 12.9374 15.0427 12.434 14.6959 12.2257C14.3491 12.0174 14.1018 12.2083 14.0215 12.3298C13.8609 12.5555 13.5013 13.0693 13.3471 13.3193C13.193 13.5692 12.9296 13.4929 12.8172 13.4234C10.216 12.1736 9.87878 10.7155 9.73427 10.4551C9.60731 10.2263 9.67004 10.0558 9.73427 9.98639C9.78244 9.93431 9.93659 9.75726 10.1678 9.46563C10.399 9.174 10.3605 8.75392 10.3123 8.58033Z"
          fill={theme == "dark" ? "white" : "#0B1736"}
        />
      </svg>
      <span
        className={`${
          theme == "dark"
            ? "group-hover:text-brand-dark/80"
            : "group-hover:text-white/80"
        } transition-all duration-200 text-sm whitespace-nowrap`}
      >
        {error ??
          (phoneNumber !== null ? betterDisplay(phoneNumber) : "Loading...")}
      </span>
    </a>
  );
}
