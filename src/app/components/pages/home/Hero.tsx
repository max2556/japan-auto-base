import Image from 'next/image';
import SubmitApplicationButton from '../../shared/SubmitApplicationButton';
import Button from '../../shared/Button';

export default function Hero() {

  return (
    <section id="hero" className="space-y-4 md:space-y-8 bg-white pt-40 -mt-24">
      {/* Cars Image */}
      <Image
        src="/assets/images/img-hero.svg"
        alt="Cars Image"
        width={737}
        height={312}
        className="mx-auto w-[40rem] h-[17rem] lg:w-auto lg:h-auto shrink-0 -mt-24"
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
          <div className="shrink-0 bg-white rounded-10 p-4">
            <Button red>Оставить заявку</Button>
          </div>
          <div className="w-full h-[0.1875rem] bg-brand-red rounded-l-full"></div>
        </div>
      </div>
    </section>
  );
}
