import React from "react";
import { Radio } from "./Radio";

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
  options: Array<{ label: string }>;
  isLoading: boolean;
}

export default function FilterBrand({
  onChange,
  options,
  isLoading,
}: FilterBrandProps) {
  return (
    <div className="flex flex-col no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Марка</h4>
      {isLoading ? (
        <Radio
          options={options}
          onChange={onChange}
          name="brand"
          needAnyOption
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p>Загрузка...</p>
        </div>
      )}
    </div>
  );
}
