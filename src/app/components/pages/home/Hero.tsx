import Image from 'next/image';
import SubmitApplicationButton from '../../shared/SubmitApplicationButton';

export default function Hero() {
  return (
    <section className="space-y-4 md:space-y-8 bg-white">
      {/* Cars Image */}
      <Image
        src="/assets/images/img-hero.svg"
        alt="Cars Image"
        width={737}
        height={312}
        className="mx-auto w-[40rem] h-[17rem] shrink-0"
      />
      {/* Texts */}
      <div className="space-y-1.5">
        <h2 className="text-center">
          Продаем и доставляем <br />
          авто из Японии
        </h2>
        <ul className="flex flex-col md:flex-row items-center justify-center md:gap-4 text-sm">
          <li className="">Работаем с 2008 года</li>
          <li className="">Продали более 1000 авто</li>
          <li className="">Самые выгодные сделки</li>
        </ul>
        {/* Line */}
        <div className="flex items-center">
          <div className="w-full h-[0.1875rem] bg-brand-red rounded-r-full"></div>
          <SubmitApplicationButton />
          <div className="w-full h-[0.1875rem] bg-brand-red rounded-l-full"></div>
        </div>
      </div>
    </section>
  );
}
