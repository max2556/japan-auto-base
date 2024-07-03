import React, { useState } from 'react';
import FiltersCotainer, { OnlineAuctionFilters } from './FiltersCotainer';

export default function OnlieAuction() {
  const [filters, setFilters] = useState<OnlineAuctionFilters>({});

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
          <FiltersCotainer filters={filters} onChange={(e) => setFilters(e)}/>

        </div>
      </div>
    </section>
  );
}
