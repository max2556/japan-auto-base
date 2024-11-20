import React from "react";
import { Radio } from "./Radio";

export interface FilterBrandProps {
  value: string;
  onChange: (value?: string) => void;
  options: Array<{ label: string; value: string }>;
  isLoading: boolean;
}

export default function FilterBodyType({
  value,
  onChange,
  options,
  isLoading,
}: FilterBrandProps) {
  return (
    <div className="flex flex-col no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип кузова</h4>
      {isLoading ? (
        <Radio
          value={value}
          options={options}
          onChange={onChange}
          name="bodyType"
          needAnyOption
          anyOptionLabel="Любой"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p>Загрузка...</p>
        </div>
      )}
    </div>
  );
}
