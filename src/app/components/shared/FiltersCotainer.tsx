"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import FilterBrand from "./FilterBrand";
import FilterModel from "./FilterModel";
import FilterColor from "./FilterColor";
import FilterBodyType from "./FilterBodyType";
import FilterMilageYearManifacture from "./FilterMilageYearManifacture";
import FilterEngineCapacity from "./FilterEngineCapacity";
import FilterGrade from "./FilterGrade";
import Button from "./Button";
import {
  AuctionFiltersOptions,
  getAuctionFiltersOptions,
} from "@/app/services/auto";
import { anyOptionValue } from "./Radio";

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

export const labelAny = "any";

export default function FiltersCotainer({
  filters,
  onChange,
  onApply,
}: FiltersCotainerProps) {
  const [filterOptions, setFilterOptions] = useState<AuctionFiltersOptions>();
  const [marks, setMarks] = useState<AuctionFiltersOptions["marks"]>();

  const setFilter = useCallback(
    (field: keyof Filters, value: string | undefined) => {
      onChange({ ...filters, [field]: value });
    },
    [filters, onChange]
  );

  const getFilterOptions = async () => {
    const res = await getAuctionFiltersOptions();
    setFilterOptions(res);
  };

  const findModels = useCallback(
    () =>
      filterOptions?.marks.find((mark) => mark.title == filters.mark)?.models ??
      [],
    [filterOptions?.marks, filters.mark]
  );
  const memo_models = useMemo(findModels, [findModels]);

  const findBodyModels = useCallback(
    () =>
      memo_models?.find((model) => model.title == filters.model)?.bodies ?? [],
    [filters.model, memo_models]
  );
  const memo_bodyModels = useMemo(findBodyModels, [findBodyModels]);

  // Should be ran once
  useEffect(() => {
    getFilterOptions();
  }, []);
  useEffect(() => {
    setMarks(filterOptions?.marks ?? []);
  }, [filterOptions]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2">
      <FilterBrand
        value={filters.mark ?? anyOptionValue}
        options={
          marks?.map((mark) => ({ label: mark.title, value: mark.title })) ?? []
        }
        isLoading={!!filterOptions}
        onChange={(newMark) => {
          onChange({
            ...filters,
            mark: newMark,
            model: undefined,
            bodyModel: undefined,
          });
        }}
      />
      <FilterModel
        value={filters.model ?? anyOptionValue}
        isLoading={!!filterOptions}
        onChange={(newModel) => {
          onChange({ ...filters, model: newModel, bodyModel: undefined });
        }}
        options={memo_models.map((model) => ({
          label: model.title,
          value: model.title,
        }))}
      />
      <FilterBodyType
        value={filters.bodyModel ?? anyOptionValue}
        isLoading={!!filterOptions}
        onChange={(e) => setFilter("bodyModel", e)}
        options={memo_bodyModels.map((body) => ({
          label: body.title,
          value: body.title,
        }))}
      />
      <FilterColor
        value={filters.color ?? anyOptionValue}
        onChange={(e) => setFilter("color", e)}
      />
      <FilterMilageYearManifacture onChange={setFilter} />
      <div className="sm:block h-140 sm:h-220 space-y-2">
        <FilterEngineCapacity
          value={filters.engineCapacity ?? anyOptionValue}
          onChange={(e) => setFilter("engineCapacity", e)}
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
        <FilterGrade
          value={filters.auctionValuation ?? anyOptionValue}
          onChange={(e) => setFilter("auctionValuation", e)}
        />
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
      <div className="grid col-span-2 xs:col-span-3 place-content-center sm:hidden pt-4">
        <Button blue onClick={() => onApply?.(filters)}>
          Применить
        </Button>
      </div>
    </div>
  );
}
