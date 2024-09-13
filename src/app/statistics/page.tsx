"use client";
import { useEffect, useState } from "react";
import CarInfo from "../components/shared/CarInfo";
import Pagination from "../components/shared/Pagination";
import { PaginationsParams } from "../services/pagination";
import { Statistic, getStatistics } from "../services/statistics";

export default function Page() {
  const limit = 8;
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [statisticsPositions, setStatisticsPositions] = useState<
    Statistic[] | null
  >(null);

  const getStatisticsPositions = async (
    params?: PaginationsParams<Statistic>
  ) => {
    const { count, autos } = (await getStatistics(params)) ?? {
      count: 0,
      autos: [],
    };

    setCount(count);
    setStatisticsPositions(autos);
    return { count, autos };
  };

  useEffect(() => {
    getStatisticsPositions({
      page: page + 1,
      limit,
      expanded: true,
    });
  }, [page]);

  const statisticsSection = () => (
    <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
      <div className="max-w-96 lg:pr-6 space-y-1">
        <h2>Статистика</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {statisticsPositions?.map((card) => (
          //TODO: where to get photo?
          <CarInfo
            key={card.id}
            id={card.id}
            bodyType={card.bodyModel}
            engineCapacity={parseInt(card.engineCapacity) / 1000}
            mileage={card.mileageInKm}
            price={card.price}
            releaseDate={card.registrationYear}
            title={card.mark + " " + card.model}
          />
        ))}
      </div>

      {Math.ceil(count / limit) > 1 && (
        <Pagination
          page={page}
          pages={Math.ceil(count / limit)}
          onClick={(page) => setPage(page)}
        />
      )}
    </section>
  );

  const notFound = () => (
    <div className="max-w-4xl mx-auto py-12 px-4 lg:px-6">
      <div className="max-w-96 lg:pr-6 py-1">
        <h2 className="text-center">Ничего не найдено</h2>
      </div>
    </div>
  );

  return (
    <div className="bg-brand-gray">
      {statisticsPositions?.length ? statisticsSection() : notFound()}
    </div>
  );
}
