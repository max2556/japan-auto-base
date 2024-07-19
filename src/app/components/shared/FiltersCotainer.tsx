import React from "react";
import FilterBrand from "./FilterBrand";
import FilterModel from "./FilterModel";
import FilterColor from "./FilterColor";
import FilterBodyType from "./FilterBodyType";
import FilterMilageYearManifacture from "./FilterMilageYearManifacture";
import FilterEngineCapacity from "./FilterEngineCapacity";
import FilterGrade from "./FilterGrade";
import Button from "./Button";

export interface OnlineAuctionFilters {
  mark?: string;
  model?: string;
  color?: string;
  bodyModel?: string;
  mileageInKm?: string;
  auctionDate?: string; //ISO date format "2024-07-19T00:00:00.000Z"
  manifacture?: string;
  engineCapacity?: string;
  auctionValuation?: string;
}

export interface FiltersCotainerProps {
  filters: OnlineAuctionFilters;
  onChange: (filters: OnlineAuctionFilters) => void;
  onApply?: (filters: OnlineAuctionFilters) => void;
}

export default function FiltersCotainer({
  filters,
  onChange,
  onApply,
}: FiltersCotainerProps) {
  const setFilter = (
    field: keyof OnlineAuctionFilters,
    value: string | undefined
  ) => {
    onChange({ ...filters, [field]: value });
  };

  const convertLitresToCC = (capInLitres: string | number) => {
    let val = Number(capInLitres);
    return val * 1000;
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand
        value={filters.mark}
        onChange={(e) => setFilter("mark", e?.toLocaleUpperCase())}
      />
      <FilterModel
        onChange={(e) => setFilter("model", e)}
        mark={filters.mark?.toLocaleLowerCase()}
      />
      <FilterBodyType onChange={(e) => setFilter("bodyModel", e)} />
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
      <FilterMilageYearManifacture
        onChange={(e) => setFilter("mileageInKm", e)}
      />
      <div className="sm:block h-140 sm:h-220 space-y-2">
        <FilterEngineCapacity
          onChange={(e) =>
            setFilter(
              "engineCapacity",
              e ? convertLitresToCC(e) + "cc" : undefined
            )
          }
        />
        <div className="w-full hidden sm:grid place-content-center gap-2 bg-white rounded-10 py-4 px-4">
          <input
            type="date"
            name="auctionDate"
            id="auctionDate"
            placeholder="Дата &#10;торогов"
            className="w-full h-8 grid place-content-center bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line placeholder:text-xs rounded-5  pl-4 pr-2"
            onChange={(e) => setFilter("auctionDate", e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="sm:block h-140 sm:h-220 space-y-2">
        <FilterGrade onChange={(e) => setFilter("auctionValuation", e)} />
        <div className="w-full grid place-content-center bg-white rounded-10 py-4">
          <Button blue className="h-8 !w-full" onClick={() => onApply?.(filters)}>
            Применить
          </Button>
        </div>
      </div>
      <div className="w-full sm:hidden gap-2 bg-white rounded-10 p-4">
        <input
          type="date"
          name="auctionDate"
          id="auctionDate"
          placeholder="Дата &#10;торогов"
          className="w-full h-12 grid place-content-center bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line placeholder:text-xs rounded-5 pb-4 pl-4 pr-2"
          onChange={(e) => setFilter("auctionDate", e.currentTarget.value)}
        />
      </div>
      <div className="col-span-3 grid place-content-center sm:hidden pt-4">
        <Button blue onClick={() => onApply?.(filters)}>
          Применить
        </Button>
      </div>
    </div>
  );
}
