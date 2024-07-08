"use client";

import { useEffect, useState } from "react";
import CarInfo, { CarProps } from "../components/shared/CarInfo";
import Pagination from "../components/shared/Pagination";
import { getSoldCars } from "../services/salesHistory";

export default function Page() {
  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState<CarProps[]>([]);

  useEffect(() => {
    const fetchSalesHistory = async (params: {
      page: number;
      limit: number;
      expanded: boolean;
    }) => {
      const { cars } = await getSoldCars(params);

      const carsData = cars.map((car) => ({
        id: car.id,
        title: `${car.brand} ${car.model}`,
        price: car.price,
        grade: null,
        lotIndex: null,
        auctionTitle: null,
        soldDate: car.createdAt,
        releaseDate: car.registrationYear,
        engineCapacity: car.engineCapacity,
        enginePower: null,
        mileage: car.mileageInKm,
        bodyType: car.bodyType,
      }));

      setPageData(carsData);
    };

    fetchSalesHistory({
      page: page+1,
      limit: 10,
      expanded: true,
    });
  }, [page]);

  return (
    <div className="bg-brand-gray  ">
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <div className="max-w-96 lg:pr-6 space-y-1">
          <h2>История продаж</h2>
          <p className="text-sm leading-4">
            Здесь находяться проаданные авто, вы можете изучить эти данные!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {pageData.map((car, idx) => (
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
            />
          ))}
          {/* {Array.from({ length: 8 }).map((_, idx) => (
            <CarInfo key={idx} />
          ))} */}
        </div>
        <Pagination page={page} pages={10} onClick={(page) => setPage(page)} />
      </section>
    </div>
  );
}
