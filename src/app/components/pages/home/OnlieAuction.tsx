import React from 'react';
import FiltersCotainer from '../../shared/FiltersCotainer';

export default function OnlieAuction() {
  return (
    <section id="online-auction" className="-mt-12 lg:-mt-8">
      {/* Auction Filters */}
      <div className="max-w-6xl mx-auto lg:px-7">
        <div className="space-y-4 bg-brand-gray lg:rounded-20 px-4 py-8 lg:px-8">
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
          <FiltersCotainer />
        </div>
      </div>
    </section>
  );
}
