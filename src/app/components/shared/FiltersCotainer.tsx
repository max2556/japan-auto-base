import React from 'react';
import Filter from './Filter';
import FilterBrand from './FilterBrand';
import FilterModel from './FilterModel';
import FilterColor from './FilterColor';
import FilterBodyType from './FilterBodyType';
import FilterMilageYearManifacture from './FilterMilageYearManifacture';
import FilterEngineCapacity from './FilterEngineCapacity';
import FilterGrade from './FilterGrade';

const bodyColorOptions = [
  {
    label: 'Любой2',
  },
  {
    label: 'Белый',
  },
  {
    label: 'Серый',
  },
  {
    label: 'Черный',
  },
  {
    label: 'Синий',
  },
  {
    label: 'Желтый',
  },
  {
    label: 'Оранжевый',
  },
];

export default function FiltersCotainer() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand />
      <FilterModel />
      <FilterBodyType />
      <FilterColor />
      <FilterMilageYearManifacture />
      <FilterEngineCapacity />
      <FilterGrade />
    </div>
  );
}
