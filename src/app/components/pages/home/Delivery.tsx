import Image from 'next/image';
import Button from '../../shared/Button';
import Logo from '../../shared/Logo';

export default function Delivery() {
  return (
    <section
      id="delivery"
      className="lg:flex items-end justify-between bg-white"
    >
      <div className="h-12 w-full group flex justify-center lg:hidden items-center gap-2 bg-white text-sm font-bold rounded-full px-4">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="8" fill="#A4031F" />
        </svg>
        <span>JapanAutoBase</span>
      </div>
      <div className="hidden lg:block flex-1 h-[0.1875rem] bg-brand-red rounded-r-full"></div>
      <div className="max-w-5xl flex flex-col lg:flex-row items-center lg:gap-24 -mb-10 sm:px-10 md:px-14 lg:px-0">
        <Image
          src="/assets/images/img-supfooter.svg"
          alt="Cars"
          width={1000}
          height={700}
          className="lg:w-[41.9375rem] lg:h-[18.8125rem]"
        />
        {/* Logo & Texts */}
        <div className="space-y-3">
          <div className="h-12 w-fit group hidden lg:flex items-center gap-2 bg-white text-sm font-bold rounded-full mt-12 -ml-4 px-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="16" rx="8" fill="#A4031F" />
            </svg>
            <span>JapanAutoBase</span>
          </div>
          {/* Texts */}
          <div className="space-y-2 text-center lg:text-start">
            <h2>
              Продаем и доставляем <br />
              авто из Японии
            </h2>
            <ul className="flex flex-col justify-center text-sm">
              <li className="">Работаем с 2008 года</li>
              <li className="">Продали более 1000 авто</li>
              <li className="">Самые выгодные сделки</li>
            </ul>
            <div className="relative hidden lg:block shrink-0 bg-white rounded-10 pt-4 pb-6">
              <Button red>Оставить заявку</Button>
              <div className="h-[0.1875rem] w-20 hidden lg:block absolute -right-2 top-[41%] bg-brand-red rounded-l-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block flex-1 h-[0.1875rem] bg-brand-red rounded-l-full"></div>
      <div className="flex lg:hidden items-center mt-10">
        <div className="w-full h-[0.1875rem] bg-brand-red rounded-r-full"></div>
        <div className="shrink-0 bg-white rounded-10 p-4">
          <Button red>Оставить заявку</Button>
        </div>
        <div className="w-full h-[0.1875rem] bg-brand-red rounded-l-full"></div>
      </div>
    </section>
  );
}
