import React from "react";
import { Radio } from "./Radio";

const options = [
  {
    label: "Honda",
  },
  {
    label: "Toyota",
  },
  {
    label: "Suzuki",
  },
  {
    label: "Mitsubishi",
  },
  {
    label: "Subaru",
  },
  {
    label: "Mazda",
  },
  {
    label: "Nissan",
  },
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
}

export default function FilterBrand({ onChange }: FilterBrandProps) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Марка</h4>
      <Radio options={options} onChange={onChange} name="brand" needAnyOption />
    </div>
  );
}
