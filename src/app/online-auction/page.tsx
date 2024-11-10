"use client";

import { useEffect, useState } from "react";
import CarInfo from "../components/shared/CarInfo";
import FiltersCotainer, { Filters } from "../components/shared/FiltersCotainer";
import Pagination from "../components/shared/Pagination";
import {
  AuctionPosition,
  AuctionPositionsParams,
  getAuctionPositions,
} from "../services/auctions";
import { parseFilters } from "../utils/filters";
import { debounce, omit } from "lodash";
import { convertCCtoLitres, prettifyNumber } from "../utils/convert";

export default function Page() {
  const limit = 8;
  const [page, setPage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [filters, setFilters] = useState<Filters>({});
  const [auctionPositions, setAuctionPositions] = useState<
    AuctionPosition[] | null
  >(null);

  const getAuctionsPositions = async (params?: AuctionPositionsParams) => {
    const { count, positions } = await getAuctionPositions(params);

    setCount(count);
    setAuctionPositions(positions);
    return { count, positions };
  };

  const getPositions = () =>
    getAuctionsPositions({
      page: page + 1,
      limit,
      expanded: true,
      startMileageInKm: filters.startMileageInKm
        ? parseInt(filters.startMileageInKm)
        : undefined,
      endMileageInKm: filters.endMileageInKm
        ? parseInt(filters.endMileageInKm)
        : undefined,
      startRegistrationYear: filters.startRegistrationYear
        ? parseInt(filters.startRegistrationYear)
        : undefined,
      endRegistrationYear: filters.endRegistrationYear
        ? parseInt(filters.endRegistrationYear)
        : undefined,
      ...parseFilters(
        omit(filters, [
          "startMileageInKm",
          "endMileageInKm",
          "startRegistrationYear",
          "endRegistrationYear",
        ])
      ),
    });

  useEffect(() => {
    getPositions();
  }, []);

  function NotFound() {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 lg:px-6">
        <div className="max-w-96 lg:pr-6 py-1">
          <h2 className="text-center">Ничего не найдено</h2>
        </div>
      </div>
    );
  }

  function ItemsSection() {
    return (
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <h2>Результаты поиска</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {auctionPositions && auctionPositions.length ? (
            auctionPositions.map((card) => (
              <CarInfo
                href={`/online-auction/${card.id}`}
                key={card.id}
                id={card.id}
                auctionTitle={card.auction?.title ?? "Неизвестно"}
                bodyType={card.bodyModel}
                engineCapacity={convertCCtoLitres(card.engineCapacity + "cc")}
                grade={card.auctionValuation}
                lotIndex={card.lotNumber}
                mileage={card.mileageInKm}
                price={`${prettifyNumber(card.startPrice)} / ${
                  Number(card.finalPrice) === 0
                    ? "-"
                    : prettifyNumber(card.finalPrice) ?? "-"
                }`}
                releaseDate={card.registrationYear}
                soldDate={card.auctionDate}
                title={card.mark + " " + card.model}
                imageSrc={card.photos[1].replace("google.com", "p3.aleado.com")}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
        {Math.ceil(count / limit) != 0 && (
          <Pagination
            page={page}
            pages={Math.ceil(count / limit)}
            onClick={(page) => setPage(page)}
          />
        )}
      </section>
    );
  }

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
                Здесь вы можете найти нужный вам автомобили, которые сейчас
                находятся на аукционах в Японии, на ближайшие 3 дня, после вы
                можете связаться с нами для покупки авто.
              </p>
            </div>
            {/* Filters Container */}
            <FiltersCotainer
              filters={filters}
              onChange={debounce((e) => setFilters(e), 400)}
              onApply={() => {
                getPositions();
              }}
            />
          </div>
        </div>
      </section>
      <div className="h-[0.1875rem] bg-brand-red"></div>
      <ItemsSection />
    </div>
  );
}
