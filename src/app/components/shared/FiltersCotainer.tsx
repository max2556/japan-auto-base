import React from 'react';
import Filter from './Filter';
import FilterBrand from './FilterBrand';
import FilterModel from './FilterModel';
import FilterColor from './FilterColor';
import FilterBodyType from './FilterBodyType';
import FilterMilageYearManifacture from './FilterMilageYearManifacture';
import FilterEngineCapacity from './FilterEngineCapacity';
import FilterGrade from './FilterGrade';
import Button from './Button';

export default function FiltersCotainer() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand />
      <FilterModel />
      <FilterBodyType />
      <FilterColor />
      <div className="sm:hidden">
        <FilterGrade />
      </div>
      <div className="sm:hidden">
        <FilterEngineCapacity />
      </div>
      <FilterMilageYearManifacture />
      <div className="hidden sm:block">
        <FilterEngineCapacity />
      </div>
      <div className="hidden sm:block">
        <FilterGrade />
      </div>
      <div className="w-full sm:hidden gap-2 bg-white rounded-10 p-4">
        <input
          type="text"
          placeholder="Дата &#10;торогов"
          className="w-full h-12 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line text-sm rounded-5 pb-2 px-4"
        />
      </div>
      <div className="col-span-3 grid place-content-center sm:hidden pt-4">
        <Button blue>Применить</Button>
      </div>
    </div>
  );
}
