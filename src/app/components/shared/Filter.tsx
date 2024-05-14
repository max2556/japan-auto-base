'use client';

import { useFilter } from '@/app/contexts/useFilter';
import React from 'react';

interface Option {
  label: string;
}

interface FilterProps {
  title: string;
  options: Option[];
}

export default function Filter({ title, options }: FilterProps) {
  const { handleBrandSelect, brandSelected } = useFilter();

  const model = title === 'Модель';

  return (
    <div className="no-scroll max-w-40 h-full space-y-3 bg-white overflow-auto rounded-10 py-4 px-4">
      <h4>{title}</h4>
      {/* Checks */}
      <div className="space-y-2">
        {model && brandSelected ? (
          options.map((option) => (
            <label
              key={option.label}
              htmlFor={option.label}
              className="flex gap-2.5 text-sm cursor-pointer"
            >
              <input type="checkbox" id={option.label} className="hidden" />
              <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
                <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
              </div>
              <p className="leading-4">
                {option.label.startsWith('Любой2') ? 'Любой' : option.label}
              </p>
            </label>
          ))
        ) : !model ? (
          options.map((option) => (
            <label
              onClick={
                title === 'Марка'
                  ? () => handleBrandSelect(option.label)
                  : undefined
              }
              key={option.label}
              htmlFor={option.label}
              className="flex gap-2.5 text-sm cursor-pointer"
            >
              <input type="checkbox" id={option.label} className="hidden" />
              <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
                <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
              </div>
              <p className="leading-4">
                {/* Here checking */}
                {option.label.startsWith('Любой2') ? 'Любой' : option.label}
              </p>
            </label>
          ))
        ) : (
          <p className="text-sm leading-4">Сначала выберите марку</p>
        )}
      </div>
    </div>
  );
}
