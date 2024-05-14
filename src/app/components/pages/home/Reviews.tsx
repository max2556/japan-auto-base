import React from 'react';
import Review from './Review';
import Button from '../../shared/Button';

export default function Reviews() {
  return (
    <section id="online-auction">
      {/* Auction Filters */}
      <div className="max-w-6xl mx-auto lg:px-7">
        <div className="space-y-4 bg-brand-gray lg:rounded-20 px-4 py-8 lg:px-8">
          {/* Texts */}
          <div className="max-w-96 lg:pr-6 space-y-1">
            <h2>Отзывы</h2>
            <p className="text-sm leading-4">
              Более 1000 отзывов от наших клиентов!
            </p>
          </div>
          {/* Reviews Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Review key={idx} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button blue>Показать больше</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
