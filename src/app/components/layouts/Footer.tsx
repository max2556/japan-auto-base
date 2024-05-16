'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`${pathname === '/' ? 'bg-white' : ''}`}>
      <div className="bg-brand-dark text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-12 px-4 lg:px-[1.875rem]">
          {/* Sections */}
          <div className="space-y-8">
            <h2 className="text-white">Разделы</h2>
            <div className="flex items-center whitespace-nowrap gap-5">
              <ul className="w-full lg:text-sm space-y-5">
                <li>
                  <Link
                    href="/"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Главная страница
                  </Link>
                </li>
                <li>
                  <Link
                    href="/online-auction"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Online аукцион
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sales-history"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    История продаж
                  </Link>
                </li>
                <li>
                  <Link
                    href="/calculator"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Калькулятор
                  </Link>
                </li>
              </ul>
              <ul className="w-full lg:text-sm space-y-5">
                <li>
                  <Link
                    href="/calculator"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Калькулятор
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agreement"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Договор
                  </Link>
                </li>{' '}
                <li>
                  <Link
                    href="/delivery"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Доставка по РФ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Information */}
          <div className="space-y-8 mt-4 lg:mt-0">
            <h2 className="text-white">Информация</h2>
            <ul className="w-full lg:text-sm space-y-5">
              <li className="flex items-center gap-2">
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
                  className="group flex items-center gap-2 font-sansation"
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
              </li>
              <li>
                {/* Email */}
                <a
                  href="mailto:japanautobase@mail.com"
                  className="font-sansation hover:text-white/80 transition-all duration-200"
                >
                  Japanautobase@mail.com
                </a>
              </li>
              <li>
                <Link href="/">Политика конфиденциальности</Link>
              </li>
              <li>
                <Link href="/">Оферта</Link>
              </li>
            </ul>
          </div>
          {/* About Us */}
          <div className="lg:max-w-[11.25rem] space-y-7 mt-5 lg:mt-0">
            <h2 className="text-white">О нас </h2>
            <div className="w-full text-sm space-y-4">
              <div className="h-8 w-[6.5rem] group flex items-center gap-2 text-brand-dark bg-white text-[0.5625rem] font-bold rounded-full px-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <rect width="16" height="16" rx="8" fill="#A4031F" />
                </svg>
                <span>JapanAutoBase</span>
              </div>
              <p className="leading-4">
                Продаем автомбоили из Японии c 2008 года, продали более 10000
                автомобилей, помогаем пройти через все этапы покупи и доставки
                авто прям в ваши руки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
