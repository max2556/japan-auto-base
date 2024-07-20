"use client";

import { useEffect, useState } from "react";
import CarInfo, { CarProps } from "../components/shared/CarInfo";
import Pagination from "../components/shared/Pagination";
import { getSoldCars } from "../services/salesHistory";
import { baseURL } from "../utils/axios";

export default function Page() {
  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState<CarProps[]>([]);
  const [count, setCount] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchSalesHistory = async (params: {
      page: number;
      limit: number;
      expanded: boolean;
    }) => {
      const { autos, count } = await getSoldCars(params);

      const carsData = autos.map((car) => ({
        id: car.id,
        title: `${car.mark} ${car.model}`,
        price: car.price,
        soldDate: car.createdAt,
        releaseDate: car.registrationYear,
        engineCapacity: car.engineCapacity,
        mileage: car.mileageInKm,
        bodyType: car.bodyModel,
        imageSrc: `${baseURL}/files/${car.photos[0].id}`,
      }));

      setPageData(carsData);
      setCount(count);
    };

    fetchSalesHistory({
      page: page + 1,
      limit,
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
          {pageData.length > 0
            ? pageData.map((car, idx) => (
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
              ))
            : "Нет данных"}
        </div>
        {Math.ceil(count / limit) > 1 && (
          <Pagination
            page={page}
            pages={Math.ceil(count / limit)}
            onClick={(page) => setPage(page)}
          />
        )}
      </section>
    </div>
  );
}
