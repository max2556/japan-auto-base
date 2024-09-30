"use client";
import React, { useEffect, useState } from "react";
import CarInfo from "../../shared/CarInfo";
import Link from "next/link";
import { Statistic, getStatistics } from "@/app/services/statistics";
import { PaginationsParams } from "@/app/services/pagination";
import { convertCCtoLitres } from "@/app/utils/convert";

export default function Statistics() {
  const [autos, setAutos] = useState<Statistic[] | null>(null);

  const getStatisticsPositions = async (
    params?: PaginationsParams<Statistic>
  ) => {
    const { count, positions: autos } = (await getStatistics(params)) ?? {
      count: 0,
      autos: [],
    };

    setAutos(autos ?? null);
    return { count, autos };
  };

  useEffect(() => {
    getStatisticsPositions({
      page: 1,
      limit: 8,
      expanded: true,
    });
  }, []);

  return (
    <section id="statistics" className="bg-white">
      <div className="bg-brand-dark py-8">
        <div className="max-w-4xl mx-auto space-y-4 px-4 sm:px-10 md:px-14 lg:px-6">
          <div className="max-w-[25rem] text-white lg:pr-6 space-y-1">
            <h2 className="text-white">Статистика</h2>
          </div>
          {/* Cars */}
          <div className="grid sm:grid-cols-2 gap-2">
            {autos?.map((card) => (
              //TODO: where to get photo?
              <CarInfo
                key={card.id}
                id={card.id}
                bodyType={card.bodyModel}
                engineCapacity={convertCCtoLitres(card.engineCapacity)}
                mileage={card.mileageInKm}
                price={card.finalPrice}
                releaseDate={card.registrationYear}
                title={card.mark + " " + card.model}
                imageSrc={card.photos[1]}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/statistics"
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
