import React from 'react';
import CarInfo from '../../shared/CarInfo';
import Button from '../../shared/Button';

export default function Catalog() {
  return (
    <section id="catalog" className="bg-white">
      <div className="bg-brand-dark py-8">
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-10 md:px-14 lg:px-6">
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
          <div className="flex items-center justify-center">
            <Button
              white
              className="hover:bg-brand-gray-100 hover:!text-brand-dark"
            >
              Показать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
