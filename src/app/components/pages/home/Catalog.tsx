import React from 'react';
import CarInfo from '../../shared/CarInfo';

export default function Catalog() {
  return (
    <section id="catalog">
      <div className="bg-brand-dark py-8">
        <div className="max-w-4xl mx-auto space-y-4 px-4 lg:px-6">
          <div className="max-w-[25rem] text-white lg:pr-6 space-y-1">
            <h2 className="text-white">Каталог автомобилей</h2>
            <p className="text-sm leading-4">
              Здесь вы можете найт автомобили готовые к покупке! Указанная цена
              не явлеться окончательной!
            </p>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <CarInfo key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
