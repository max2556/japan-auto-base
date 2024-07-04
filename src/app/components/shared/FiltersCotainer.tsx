import React from "react";
import Filter from "./Filter";
import FilterBrand from "./FilterBrand";
import FilterModel from "./FilterModel";
import FilterColor from "./FilterColor";
import FilterBodyType from "./FilterBodyType";
import FilterMilageYearManifacture from "./FilterMilageYearManifacture";
import FilterEngineCapacity from "./FilterEngineCapacity";
import FilterGrade from "./FilterGrade";
import Button from "./Button";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export interface OnlineAuctionFilters {
  brand?: string;
  model?: string;
  color?: string;
  bodyType?: string;
  milage?: string;
  year?: string;
  manifacture?: string;
  engineCapacity?: string;
  grade?: string;
}

export interface FiltersCotainerProps {
  filters: OnlineAuctionFilters;
  onChange: (filters: OnlineAuctionFilters) => void;
}

export default function FiltersCotainer({
  filters,
  onChange,
}: FiltersCotainerProps) {
  const setFilter = (field: keyof OnlineAuctionFilters, value: string) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand
        value={filters.brand}
        onChange={(e) => setFilter("brand", e)}
      />
      <FilterModel
        onChange={(e) => setFilter("model", e)}
        mark={filters.brand?.toLocaleLowerCase()}
      />
      <FilterBodyType onChange={(e) => setFilter("bodyType", e)} />
      <FilterColor onChange={(e) => setFilter("color", e)} />
      {/* 
      //TODO: fix 
      Using same components == using same inputs with same id
      Id collision -> error
      */}
      
      {/* 
      <div className="sm:hidden">
        <FilterGrade onChange={(e) => setFilter("grade", e)} />
      </div>
      <div className="sm:hidden">
        <FilterEngineCapacity onChange={(e) => setFilter("engineCapacity", e)} />
      </div> */}
      <FilterMilageYearManifacture onChange={(e) => setFilter("milage", e)} />
      <div className="sm:block">
        <FilterEngineCapacity
          onChange={(e) => setFilter("engineCapacity", e)}
        />
      </div>
      <div className="sm:block">
        <FilterGrade onChange={(e) => setFilter("color", e)} />
      </div>
      <div className="w-full sm:hidden gap-2 bg-white rounded-10 p-4">
        <input
          type="date"
          placeholder="Дата &#10;торогов"
          className="w-full h-12 grid place-content-center bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line placeholder:text-xs rounded-5 pb-4 pl-4 pr-2"
        />
      </div>
      <div className="col-span-3 grid place-content-center sm:hidden pt-4">
        <Button blue>Применить</Button>
      </div>
    </div>
  );
}
