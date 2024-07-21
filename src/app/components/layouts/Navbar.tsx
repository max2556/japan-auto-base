"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SubmitApplicationButton from "../shared/SubmitApplicationButton";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import PhoneNumber from "../shared/PhoneNumber";
import Email from "../shared/Email";
import Whatsapp from "../shared/Whatsapp";

const links = [
  {
    name: "Главная страница",
    href: "/",
  },
  {
    name: "Online аукцион",
    href: "/online-auction",
  },
  {
    name: "Каталог",
    href: "/catalog",
  },
  {
    name: "История продаж",
    href: "/sales-history",
  },
  {
    name: "Калькулятор",
    href: "/calculator",
  },
  {
    name: "Договор",
    href: "/contract",
  },
  {
    name: "Доставка",
    href: "/delivery",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

export default function Navbar() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function toggleMobMenu() {
    setIsMobMenuOpen((open) => !open);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <header className={`sticky top-0 z-50 font-sansation bg-white`}>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobMenuOpen && (
          <MobileMenu isOpen={isMobMenuOpen} onToggle={toggleMobMenu} />
        )}
      </AnimatePresence>
      {/* Submit Application Button */}
      <SubmitApplicationButton />
      {/* Links */}
      <div className="max-w-4xl mx-auto relative flex items-center justify-between px-4 lg:px-6 ">
        <ul className="md:w-full h-16 md:h-10 lg:h-12 flex items-center justify-between md:text-xs lg:text-sm text-brand-purple/50 ">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-brand-purple"
                    : "hidden md:inline-block"
                } hover:text-brand-purple transition-all duration-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobMenu}
          className="w-8 h-8 grid place-content-center md:hidden bg-brand-dark rounded-7"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 8C3.44772 8 3 7.55228 3 7V7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V7C21 7.55228 20.5523 8 20 8H4ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* Reviews & Contacts */}
      <div
        className={`bg-brand-dark/90 text-white sm:text-xs lg:text-sm transition-all duration-500 py-3 sm:py-2 `}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 lg:px-6">
          {/* Reviews */}
          {pathname === "/" ? <Link href="#reviews">Отзывы</Link> : null}
          {/* Contacts */}
          <div
            className={`flex flex-col sm:flex-row items-center ${
              pathname !== "/" ? "w-full justify-end" : ""
            } gap-2.5 sm:gap-7 font-bold`}
          >
            <div className="flex items-center gap-2">
              {/* Whatsapp */}
              <Whatsapp />
              {/* Tel */}
              <PhoneNumber />
            </div>
            {/* Email */}
            <span className="hover:text-white/80 transition-all duration-200">
              <Email />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
