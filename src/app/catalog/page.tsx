"use client";
import { useEffect, useState } from "react";
import CarInfo from "../components/shared/CarInfo";
import Pagination from "../components/shared/Pagination";
import { BaseEntity } from "../services/base";
import { PaginationsParams } from "../services/pagination";
import { api } from "../utils/axios";

interface Catalog extends BaseEntity {
  mark: string;
  model: string;
  registrationYear: number;
  mileageInKm: number;
  engineCapacity: string;
  transmission: string;
  color: string;
  bodyModel: string;
  price: number;
  description: string;
}

export default function Page() {
  const limit = 8;
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [catalogPositions, setCatalogPositions] = useState<Catalog[] | null>(
    null
  );

  const getAuctionsPositions = async (params?: PaginationsParams<Catalog>) => {
    const response = await api.get<{
      autos: Catalog[];
      count: number;
    }>(`/statistic`, {
      params,
    });

    setCount(response.data.count);
    setCatalogPositions(response.data.autos);
    return response;
  };

  useEffect(() => {
    getAuctionsPositions({
      page: page + 1,
      limit,
      expanded: true,
    });
  }, [page]);

  return (
    <div className="bg-brand-gray">
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <div className="max-w-96 lg:pr-6 space-y-1">
          <h2>Каталог автомобилей</h2>
          <p className="text-sm leading-4">
            Здесь вы можете найт автомобили готовые к покупке! Указанная цена не
            явлеться окончательной!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {catalogPositions?.map((card) => (
            //TODO: where to get photo?
            <CarInfo
              key={card.id}
              id={card.id}
              bodyType={card.bodyModel}
              engineCapacity={card.engineCapacity}
              mileage={card.mileageInKm}
              price={card.price}
              releaseDate={card.registrationYear}
              title={card.mark + " " + card.model}
            />
          ))}
        </div>
        <Pagination
          page={page}
          pages={Math.ceil(count / limit)}
          onClick={(page) => setPage(page)}
        />
      </section>
    </div>
  );
}
