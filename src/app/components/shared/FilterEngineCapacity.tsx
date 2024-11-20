"use client";

import React from "react";
import { Radio } from "./Radio";

const litres = [
  "0.66",
  "0.7",
  "0.8",
  "1.0",
  "1.1",
  "1.2",
  "1.3",
  "1.5",
  "1.6",
  "1.8",
  "2.0",
  "2.4",
  "2.5",
  "2.8",
  "3.0",
  "3.5",
] as const;

const options = litres.map((v) => ({ label: v, value: v }));

export interface FilterBrandProps {
  value: string;
  onChange: (value?: string) => void;
}

export default function FilterEngineCapacity({
  value,
  onChange,
}: FilterBrandProps) {
  return (
    <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4 className="leading-3">Обьем двигателя</h4>
      <Radio
        value={value}
        name="engineCapacity"
        options={options}
        onChange={onChange}
        needAnyOption
        anyOptionLabel="Любой"
      />
    </div>
  );
}
