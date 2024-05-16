'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SubmitApplicationButton from '../shared/SubmitApplicationButton';

const links = [
  {
    name: 'Главная страница',
    href: '/',
  },
  {
    name: 'Online аукцион',
    href: '/online-auction',
  },
  {
    name: 'Каталог',
    href: '/catalog',
  },
  {
    name: 'История продаж',
    href: '/sales-history',
  },
  {
    name: 'Калькулятор',
    href: '/calculator',
  },
  {
    name: 'Договор',
    href: '/contract',
  },
  {
    name: 'Доставка',
    href: '/delivery',
  },
  {
    name: 'Контакты',
    href: '/contacts',
  },
];

export default function Navbar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 font-sansation bg-white ${
        scrolling ? 'h-16 md:h-10 lg:h-12 shadow' : ''
      }`}
    >
      {/* Submit Application Button */}
      <SubmitApplicationButton />
      {/* Links */}
      <div className="max-w-4xl mx-auto relative flex items-center justify-between px-4 lg:px-6">
        <ul className="w-full h-16 md:h-10 lg:h-12 flex items-center justify-between md:text-xs lg:text-sm text-brand-purple/50 ">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-brand-purple'
                    : 'hidden md:block'
                } hover:text-brand-purple transition-all duration-200`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button className="w-8 h-8 grid place-content-center md:hidden bg-brand-dark rounded-7">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 8C3.44772 8 3 7.55228 3 7V7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V7C21 7.55228 20.5523 8 20 8H4ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* Reviews & Contacts */}
      <div
        className={`${
          scrolling ? '-translate-y-[300%] delay-200' : ''
        } bg-brand-dark/90 text-white sm:text-xs lg:text-sm transition-all duration-500 py-3 sm:py-2 `}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 lg:px-6">
          {/* Reviews */}
          <Link href="#reviews">Отзывы</Link>
          {/* Contacts */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-7 font-bold">
            <div className="flex items-center gap-2">
              {/* Whatsapp */}
              <a href="tel:" className="group">
                <Image
                  src="/assets/images/icon-whatsapp.png"
                  alt="Whatsapp Icon"
                  width={24}
                  height={24}
                  className="group-hover:opacity-80 transition-all duration-200"
                />
              </a>
              {/* Tel */}
              <a
                href="tel:"
                className="group flex items-center gap-2 font-bold"
              >
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.9277"
                    cy="11"
                    r="11"
                    fill="white"
                    className="fill-brand- group-hover:fill-white/80 transition-all duration-200"
                  />
                  <path
                    d="M10.3123 8.58033L9.73427 7.1222C9.50304 6.28898 9.10805 6.28897 8.91536 6.28898C8.1928 6.2369 7.82933 6.80974 7.71109 6.96597C7.01743 7.88251 7.19727 9.22261 7.37389 9.77809C8.64561 13.4443 12.0465 15.2982 13.6843 15.6627C16.5264 16.0793 16.5264 13.84 16.6227 13.5797C16.6998 13.3713 16.5264 13.2151 16.4301 13.163C15.9965 12.9374 15.0427 12.434 14.6959 12.2257C14.3491 12.0174 14.1018 12.2083 14.0215 12.3298C13.8609 12.5555 13.5013 13.0693 13.3471 13.3193C13.193 13.5692 12.9296 13.4929 12.8172 13.4234C10.216 12.1736 9.87878 10.7155 9.73427 10.4551C9.60731 10.2263 9.67004 10.0558 9.73427 9.98639C9.78244 9.93431 9.93659 9.75726 10.1678 9.46563C10.399 9.174 10.3605 8.75392 10.3123 8.58033Z"
                    fill="#0B1736"
                  />
                </svg>
                <span className="group-hover:text-white/80 transition-all duration-200">
                  +7 812 999 45 45
                </span>
              </a>
            </div>
            {/* Email */}
            <a
              href="mailto:japanautobase@mail.com"
              className="hover:text-white/80 transition-all duration-200"
            >
              Japanautobase@mail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
