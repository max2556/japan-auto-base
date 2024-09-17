"use client";

import React, { useState } from "react";
import FiltersCotainer, { Filters } from "./FiltersCotainer";
import { AuctionPosition, getAuctionPositions } from "@/app/services/auctions";
import CarInfo from "./CarInfo";
import { parseFilters } from "@/app/utils/filters";
import Link from "next/link";
import { convertCCtoLitres } from "@/app/utils/convert";
import { omit } from "lodash";

export default function OnlieAuction() {
  const [filters, setFilters] = useState<Filters>({});
  const [auctionPositions, setAuctionPositions] = useState<
    AuctionPosition[] | null
  >(null);
  const [isClicked, setIsClicked] = useState(false);

  const fetchFirstPage = async (filters: Filters) => {
    const { positions } = await getAuctionPositions({
      page: 1,
      limit: 8,
      expanded: true,
      startMileageInKm: filters.startMileageInKm ? parseInt(filters.startMileageInKm) : undefined,
      endMileageInKm: filters.endMileageInKm ? parseInt(filters.endMileageInKm) : undefined,
      startRegistrationYear: filters.startRegistrationYear ? parseInt(filters.startRegistrationYear) : undefined,
      endRegistrationYear: filters.endRegistrationYear ? parseInt(filters.endRegistrationYear) : undefined,
      ...parseFilters(omit(filters, ["startMileageInKm", "endMileageInKm", "startRegistrationYear", "endRegistrationYear"])),
    });

    setAuctionPositions(positions);
  };

  return (
    <section id="online-auction" className="bg-white -mt-12 lg:-mt-8">
      {/* Auction Filters */}
      <div className="max-w-6xl mx-auto lg:px-7">
        <div className="space-y-4 bg-brand-gray lg:rounded-20 px-4 py-8 sm:px-10 md:px-14 lg:px-8">
          {/* Texts */}
          <div className="max-w-96 lg:pr-6 space-y-1">
            <h2>Online Аукцион</h2>
            <p className="text-sm leading-4">
              Здесь вы можете найти нужные вам автомобили, которые сейчас
              находятся на аукционе, после вы можете связаться с нами для
              покупки.
            </p>
          </div>
          {/* Filters Container */}
          <FiltersCotainer
            filters={filters}
            onChange={(e) => setFilters(e)}
            onApply={(filters) => {
              setIsClicked(true);
              fetchFirstPage(filters);
            }}
          />
        </div>
      </div>
      {auctionPositions && auctionPositions.length ? (
        <div className="max-w-4xl mx-auto space-y-4 mt-5 py-5 px-4 lg:px-6 rounded-10 bg-brand-gray-100">
          <h2>Результаты поиска</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {auctionPositions.map((card) => (
              <CarInfo
                isLink={true}
                key={card.id}
                id={card.id}
                auctionTitle={card.auction?.title ?? "Неизвестно"}
                bodyType={card.bodyModel}
                engineCapacity={convertCCtoLitres(card.engineCapacity + "cc")}
                grade={card.auctionValuation}
                lotIndex={card.lotNumber}
                mileage={card.mileageInKm}
                price={card.finalPrice}
                releaseDate={card.registrationYear}
                soldDate={card.auctionDate}
                title={card.mark + " " + card.model}
                imageSrc={card.photos[1].replace("google.com", "p3.aleado.com")}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/online-auction"
              className="h-12 lg:h-8 grid place-content-center font-bold text-sm bg-brand-dark text-white font-sansation rounded-7 lg:rounded-5 hover:bg-brand-red transition-all duration-200 px-4 lg:px-3"
            >
              Показать больше
            </Link>
          </div>
        </div>
      ) : isClicked ? (
        <div className="max-w-4xl mx-auto space-y-4 mt-5 py-5 px-4 lg:px-6 rounded-10 bg-brand-gray-100">
          <h2>Результаты поиска</h2>
          <p className="text-sm leading-4">Ничего не нашлось</p>
        </div>
      ) : null}
    </section>
  );
}
