import React from "react";
import CarInfo from "../../shared/CarInfo";
import Link from "next/link";
import { getCatalog } from "@/app/services/catalog";
import { baseURL } from "@/app/utils/axios";

export default async function Catalog() {
  const catalog  = await getCatalog({
    page: 1,
    limit: 8,
    expanded: true,
  });
  const autos  = catalog?.autos ?? [];

  const carsData = autos.map((car) => ({
    id: car.id,
    title: `${car.mark} ${car.model}`,
    price: car.price,
    grade: null,
    lotIndex: null,
    auctionTitle: null,
    soldDate: car.createdAt,
    releaseDate: car.registrationYear,
    engineCapacity: car.engineCapacity,
    enginePower: null,
    mileage: car.mileageInKm,
    bodyType: car.bodyModel,
    imageSrc: `${baseURL}/files/${car.photos[0].id}`,
  }));

  return (
    <section id="sales-history" className="bg-brand-gray-100">
      <div className="pb-8 -mt-5 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-10 md:px-14 lg:px-6">
          <div className="max-w-[25rem]  lg:pr-6 space-y-1">
            <h2>Каталог автомобилей</h2>
            <p className="text-sm leading-4">
              Здесь вы можете найти автомобили готовые к покупке! Указанная цена
              не является окончательной!
            </p>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
            {carsData.map((car) => (
              <CarInfo
                key={car.id}
                id={car.id}
                auctionTitle={car.auctionTitle}
                bodyType={car.bodyType}
                engineCapacity={car.engineCapacity}
                enginePower={car.enginePower}
                grade={car.grade}
                lotIndex={car.lotIndex}
                mileage={car.mileage}
                price={car.price}
                releaseDate={car.releaseDate}
                soldDate={car.soldDate}
                title={car.title}
                imageSrc={car.imageSrc}
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
