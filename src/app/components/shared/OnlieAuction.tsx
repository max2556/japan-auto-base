"use client";

import React, { useState } from "react";
import FiltersCotainer, { Filters } from "./FiltersCotainer";
import { AuctionPosition, getAuctionPositions } from "@/app/services/auctions";
import CarInfo from "./CarInfo";
import { parseFilters } from "@/app/utils/filters";

export default function OnlieAuction() {
  const [filters, setFilters] = useState<Filters>({});
  const [auctionPositions, setAuctionPositions] = useState<
    AuctionPosition[] | null
  >(null);

  const fetchFirstPage = async (filters: Filters) => {
    const { positions } = await getAuctionPositions({
      page: 1,
      limit: 8,
      expanded: true,
      ...parseFilters(filters),
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
            onApply={(filters) => fetchFirstPage(filters)}
          />
        </div>
      </div>
      {auctionPositions && auctionPositions.length && (
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
                engineCapacity={card.engineCapacity}
                grade={card.auctionValuation}
                lotIndex={card.lotNumber}
                mileage={card.mileageInKm}
                price={card.finalPrice}
                releaseDate={card.registrationYear}
                soldDate={card.auctionDate}
                title={card.mark + " " + card.model}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
