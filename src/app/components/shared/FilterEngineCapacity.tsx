"use client";

import React from "react";
import { Radio } from "./Radio";

const options = [
  {
    label: "0.66",
  },
  {
    label: "0.7",
  },
  {
    label: "0.8",
  },
  {
    label: "1.0",
  },
  {
    label: "1.1",
  },
  {
    label: "1.2",
  },
  {
    label: "1.3",
  },
  {
    label: "1.5",
  },
  {
    label: "1.6",
  },
  {
    label: "1.8",
  },
  {
    label: "2.0",
  },
  {
    label: "2.4",
  },
  {
    label: "2.5",
  },
  {
    label: "2.8",
  },
  {
    label: "3.0",
  },
  {
    label: "3.5",
  },
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value?: string) => void;
}

export default function FilterEngineCapacity({ onChange }: FilterBrandProps) {
  return (
    <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4 className="leading-3">Обьем двигателя</h4>
      <Radio
        name="engineCapacity"
        options={options}
        onChange={onChange}
        needAnyOption
        anyOptionLabel="Любой"
      />
    </div>
  );
}
