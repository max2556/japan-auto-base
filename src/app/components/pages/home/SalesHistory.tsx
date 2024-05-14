import React from 'react';
import CarInfo from '../../shared/CarInfo';
import Button from '../../shared/Button';

export default function SalesHistory() {
  return (
    <section id="sales-history" className="bg-brand-gray-100">
      <div className="py-8">
        <div className="max-w-4xl mx-auto space-y-4 px-4 lg:px-6">
          <div className="max-w-[25rem]  lg:pr-6 space-y-1">
            <h2>История продаж</h2>
            <p className="text-sm leading-4">
              Здесь находяться уже продданые авто!
            </p>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CarInfo key={idx} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button blue>Показать больше</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
