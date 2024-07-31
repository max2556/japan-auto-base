"use client";
import React, { useState } from "react";
import FilterBrand from "./FilterBrand";
import FilterModel from "./FilterModel";
import FilterColor from "./FilterColor";
import FilterBodyType from "./FilterBodyType";
import FilterMilageYearManifacture from "./FilterMilageYearManifacture";
import FilterEngineCapacity from "./FilterEngineCapacity";
import FilterGrade from "./FilterGrade";
import Button from "./Button";
import { getAutoBodyModel } from "@/app/services/auto";

export interface Filters {
  mark?: string;
  model?: string;
  color?: string;
  bodyModel?: string;
  auctionDate?: string; //ISO date format "2024-07-19T00:00:00.000Z"
  manifacture?: string;
  engineCapacity?: string;
  auctionValuation?: string;
  startMileageInKm?: string;
  endMileageInKm?: string;
  startRegistrationYear?: string;
  endRegistrationYear?: string;
}

export interface FiltersCotainerProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onApply?: (filters: Filters) => void;
}

export default function FiltersCotainer({
  filters,
  onChange,
  onApply,
}: FiltersCotainerProps) {
  const [bodyModelOptions, setBodyModelOptions] =
    useState<{ label: string }[]>();

  const setFilter = (field: keyof Filters, value: string | undefined) => {
    onChange({ ...filters, [field]: value });
  };

  const convertLitresToCC = (capInLitres: string | number) => {
    let val = Number(capInLitres);
    return val * 1000;
  };

  const getBodyModels = async (mark: string, model: string) => {
    const models = await getAutoBodyModel(mark, model);
    setBodyModelOptions(models.map((model) => ({ label: model })));
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand
        value={filters.mark}
        onChange={(newMark) => {
          setFilter("mark", newMark?.toLocaleUpperCase());
          if (filters.bodyModel) setFilter("bodyModel", undefined);
          if (filters.model) setFilter("model", undefined);

          if (!newMark || !filters.model) return;
          getBodyModels(newMark, filters.model);
        }}
      />
      <FilterModel
        onChange={(newModel) => {
          setFilter("model", newModel);
          if (!newModel || !filters.mark) return;
          getBodyModels(filters.mark, newModel);
        }}
        mark={filters.mark?.toLocaleLowerCase()}
      />
      <FilterBodyType
        onChange={(e) => setFilter("bodyModel", e)}
        options={bodyModelOptions ?? []}
      />
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
      <FilterMilageYearManifacture onChange={setFilter} />
      <div className="sm:block h-140 sm:h-220 space-y-2">
        <FilterEngineCapacity
          onChange={(e) =>
            setFilter(
              "engineCapacity",
              e ? convertLitresToCC(e) + "cc" : undefined
            )
          }
        />
        <div className="w-full hidden sm:flex gap-2 bg-white rounded-10 p-4">
          <input
            type="date"
            name="auctionDate"
            id="auctionDate"
            placeholder="Дата &#10;торогов"
            className="w-full h-8 pl-4 pr-2 rounded-5 bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line placeholder:text-xs"
            onChange={(e) => setFilter("auctionDate", e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="sm:block h-140 sm:h-220 space-y-2">
        <FilterGrade onChange={(e) => setFilter("auctionValuation", e)} />
        <div className="w-full grid place-content-center bg-white rounded-10 py-4">
          <Button
            blue
            className="h-8 !w-full"
            onClick={() => onApply?.(filters)}
          >
            Применить
          </Button>
        </div>
      </div>
      <div className="w-full flex h-fit sm:hidden gap-2 bg-white rounded-10 p-4">
        <input
          type="date"
          name="auctionDate"
          id="auctionDate"
          placeholder="Дата &#10;торогов"
          className="w-full h-8 grid place-content-center bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line placeholder:text-xs rounded-5 pl-4 pr-2"
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
