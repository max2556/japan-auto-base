import React from "react";
import CarInfo from "../../shared/CarInfo";
import Link from "next/link";
import { cachedGetCatalog } from "@/app/services/catalog";

export default async function Catalog() {
  const catalogPositions = await cachedGetCatalog({
    page: 1,
    limit: 8,
    expanded: true,
  });

  return (
    <section id="catalog" className="bg-white">
      <div className="bg-brand-dark py-8">
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-10 md:px-14 lg:px-6">
          <div className="max-w-[25rem] text-white lg:pr-6 space-y-1">
            <h2 className="text-white">Каталог автомобилей</h2>
            <p className="text-sm leading-4">
              Здесь вы можете найти автомобили готовые к покупке! Указанная цена
              не является окончательной!
            </p>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
            {catalogPositions.autos?.map((card) => (
              //TODO: where to get photo?
              <CarInfo
                key={card.id}
                id={card.id}
                bodyType={card.bodyModel}
                engineCapacity={Number(card.engineCapacity)/1000}
                mileage={card.mileageInKm}
                price={card.price}
                releaseDate={card.registrationYear}
                title={card.mark + " " + card.model}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/catalog"
              className="h-12 lg:h-8 grid place-content-center font-bold text-sm bg-white text-brand-dark font-sansation rounded-7 lg:rounded-5 transition-all duration-200 hover:text-brand-dark hover:bg-white/90  px-4 lg:px-3"
            >
              Показать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
