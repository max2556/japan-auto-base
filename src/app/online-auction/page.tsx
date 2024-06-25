'use client';

import { useEffect, useState } from 'react';
import CarInfo from '../components/shared/CarInfo';
import FiltersCotainer, { OnlineAuctionFilters } from '../components/shared/FiltersCotainer';
import Pagination from '../components/shared/Pagination';
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import { api } from '../utils/axios';

export default function Page() {
  const [filters, setFilters] = useState<OnlineAuctionFilters>({});

  const fetchAutction = async (filters: OnlineAuctionFilters) => {
    const {data} = await api.get('/auctions', {
      params: {
        ...filters
      }
    })
    return data;
  }

  useEffect(() => {
    fetchAutction(filters)
  }, [filters])
  
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
            <FiltersCotainer filters={filters} onChange={(e) => setFilters(e)}/>

            {JSON.stringify(filters)}
          </div>
        </div>
      </section>
      <div className="h-[0.1875rem] bg-brand-red"></div>
      {/* Search Results */}
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <h2>Результаты поиска</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, idx) => (
            <CarInfo key={idx} />
          ))}
        </div>
        <Pagination />
      </section>
    </div>
  );
}
