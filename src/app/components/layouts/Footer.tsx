"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PhoneNumber from "../shared/PhoneNumber";
import Email from "../shared/Email";
import Whatsapp from "../shared/Whatsapp";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={`${pathname === "/" ? "bg-white" : ""} pt-8 lg:pt-20`}>
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
                    href="/catalog"
                    className="hover:underline underline-offset-2 transition-all duration-200"
                  >
                    Каталог
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
                </li>{" "}
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
                <Whatsapp />
                {/* Tel */}
                <PhoneNumber />
              </li>
              <li>
                {/* Email */}
                <span
                  className="font-sansation hover:text-white/80 transition-all duration-200"
                >
                  <Email/>
                </span>
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
              <div className="h-8 w-[7rem] group flex items-center gap-2 text-brand-dark bg-white text-[0.5625rem] font-bold rounded-full px-2">
                <Image src="/assets/favicon.svg" alt="logo" width={16}height={16}/>
                <span>JapanAutoBase</span>
              </div>
              <p className="leading-4">
                Продаем автомбоили из Японии c 2008 года, продали более 10000
                автомобилей, помогаем пройти через все этапы покупи и доставки
                авто прямо в ваши руки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
