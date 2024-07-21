import React from "react";
import { Radio } from "./Radio";

const options = [
  {
    label: "Седан",
  },
  {
    label: "Купе",
  },
  {
    label: "Хэтчбек",
  },
  {
    label: "Лифтбек",
  },
  {
    label: "Универсал",
  },
  {
    label: "Минивен",
  },
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
}

export default function FilterBodyType({ onChange }: FilterBrandProps) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип кузова</h4>
      <Radio
        options={options}
        onChange={onChange}
        name="bodyType"
        needAnyOption
        anyOptionLabel="Любой"
      />
    </div>
  );
}
