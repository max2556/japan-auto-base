import React from 'react';
import CarInfo from '../../shared/CarInfo';
import Link from 'next/link';

export default function SalesHistory() {
  return (
    <section id="sales-history" className="bg-brand-gray-100">
      <div className="pb-8 -mt-5 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-10 md:px-14 lg:px-6">
          <div className="max-w-[25rem]  lg:pr-6 space-y-1">
            <h2>История продаж</h2>
            <p className="text-sm leading-4">
              Здесь находятся уже проданные авто!
            </p>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
          {[... Array(6)].map((_, idx) => (
              <CarInfo
                key={idx}
                id={idx}
                auctionTitle="JU Gifu"
                bodyType="Седан"
                engineCapacity="2.5л"
                enginePower="120 л.с."
                grade="S"
                lotIndex="2"
                mileage="23456км"
                price={1000000}
                releaseDate={2012}
                soldDate="24.04.2024"
                title="Nissan Maxima"
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/sales-history"
              className="h-12 lg:h-8 grid place-content-center font-bold text-sm bg-brand-dark text-white font-sansation rounded-7 lg:rounded-5 transition-all duration-200 hover:bg-brand-red px-4 lg:px-3"
            >
              Показать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
