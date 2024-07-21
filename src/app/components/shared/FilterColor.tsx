import React from "react";
import { Radio } from "./Radio";

const options = [
  {
    label: "Белый",
    value: "WHITE",
  },
  {
    label: "Серый",
    value: "GRAY",
  },
  {
    label: "Черный",
    value: "BLACK",
  },
  {
    label: "Синий",
    value: "BLUE",
  },
  {
    label: "Желтый",
    value: "YELLOW",
  },
  {
    label: "Оранжевый",
    value: "ORANGE",
  },
  {
    label: "Коричневый",
    value: "BROWN",
  },
  {
    label: "Серебристый",
    value: "SILVER",
  },
  {
    label: "Золотой",
    value: "GOLD",
  },
  {
    label: "Розовый",
    value: "PINK",
  },
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
}

export default function FilterColor({ onChange }: FilterBrandProps) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Цвет кузова</h4>
      <Radio
        options={options}
        onChange={onChange}
        name="color"
        needAnyOption
        anyOptionLabel="Любой"
      />
    </div>
  );
}
