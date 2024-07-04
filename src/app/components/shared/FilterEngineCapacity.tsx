"use client";

import React from "react";

const options = [
  {
    label: "Все обьемы",
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
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function FilterEngineCapacity({
  value,
  onChange,
}: FilterBrandProps) {
  return (
    <div className="h-140 sm:h-220 space-y-2">
      <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
        <h4 className="leading-3">Обьем двигателя</h4>
        <fieldset className="space-y-2">
          {options.map((option) => (
            <label
              key={option.label}
              htmlFor={"engineCapacity_" + option.label}
              className="flex gap-2.5 text-sm cursor-pointer"
              onClick={() => onChange(option.label)}
            >
              <input
                type="radio"
                id={"engineCapacity_" + option.label}
                name="engineCapacity"
                className="hidden"
              />
              <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
                <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
              </div>
              <p className="leading-4">{option.label}</p>
            </label>
          ))}
        </fieldset>
      </div>
      <div className="w-full hidden sm:grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="date"
          placeholder="Дата торогов"
          className="w-full h-8 bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:text-xs  rounded-5 py-2 pl-4 pr-2"
        />
      </div>
    </div>
  );
}
