"use client";

import { cache, useEffect, useState } from "react";
import CarInfo from "../components/shared/CarInfo";
import FiltersCotainer, {
  OnlineAuctionFilters,
} from "../components/shared/FiltersCotainer";
import Pagination from "../components/shared/Pagination";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { api } from "../utils/axios";

interface Auction {
  id: 0;
  createdAt: string;
  updatedAt: string;
  title: string;
  positions: [
    {
      id: 0;
      createdAt: string;
      updatedAt: string;
      auctionDate: string;
      lotNumber: string;
      mark: string;
      model: string;
      modification: string;
      registrationYear: 0;
      mileageInKm: 0;
      engineCapacity: string;
      transmission: string;
      color: string;
      bodyModel: string;
      startPrice: 0;
      finalPrice: 0;
      result: "не известен" | "доступен" | "не доступен";
      auctionValuation: string;
      auctionId: 0;
      auction: string;
    }
  ];
}

export default function Page() {
  const limit = 8;
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [filters, setFilters] = useState<OnlineAuctionFilters>({});
  const [auctions, setAuction] = useState<Auction[] | null>(null);

  const getAuctions = async (params?: {
    page?: number;
    limit?: number;
    expanded?: boolean;
  }) => {
    // TODO: fix when api will be ready
    const auctions = await api.get<{
      auctions: Auction[];
      count: number;
    }>(`/auctions`, {
      params,
    });

    setCount(auctions.data.count);
    setAuction(auctions.data.auctions);
  };

  useEffect(() => {
    getAuctions({ expanded: true });
  }, [filters]);

  return (
    <div className=" -my-24 py-20">
      {/* Auction Filters */}
      <section className="-mt-12 lg:-mt-8">
        <div className="max-w-6xl mx-auto lg:px-7">
          <div className="space-y-4 bg-brand-gray lg:rounded-20 px-4 py-8 sm:px-10 md:px-14 lg:px-8">
            {/* Texts */}
            <div className="max-w-96 lg:pr-6 space-y-1">
              <h2>Online Аукцион</h2>
              <p className="text-sm leading-4">
                Здесь вы можете найти нужный вам автомобили которые сейчас
                находятся на аукционе, после вы можете связаться с нами для
                покупки.
              </p>
            </div>
            {/* Filters Container */}
            <FiltersCotainer
              filters={filters}
              onChange={(e) => setFilters(e)}
            />

            {JSON.stringify(filters)}
          </div>
        </div>
      </section>
      <div className="h-[0.1875rem] bg-brand-red"></div>
      {/* Search Results */}
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <h2>Результаты поиска</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {/* TODO: fix, when api ready */}
          {auctions?.map((card) => (
            <CarInfo
              key={card.id}
              id={card.id}
              auctionTitle={card.auctionTitle}
              bodyType={card.bodyModel}
              engineCapacity={card.engineCapacity}
              enginePower="???"
              grade="???"
              lotIndex={card.lotNumber}
              mileage={card.mileageInKm}
              price={card.finalPrice}
              releaseDate={card.registrationYear}
              soldDate={card.auctionDate}
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
