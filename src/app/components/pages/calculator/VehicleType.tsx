import React, { useState } from "react";

const options = [
  {
    label: "Легковой",
  },
  {
    label: "Автобус",
  },
  {
    label: "Джип",
  },
] as const;

interface Props {
  onClick: (val: (typeof options)[number]["label"]) => void;
}

export default function VehicleType({ onClick }: Props) {
  const [checked, setChecked] =
    useState<(typeof options)[number]["label"]>("Легковой");
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип автомобиля</h4>
      <fieldset className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-1 text-sm cursor-pointer"
            onChange={() => {
              onClick(option.label);
              setChecked(option.label);
            }}
          >
            <input
              type="radio"
              id={option.label}
              name="vehicleType"
              className="hidden"
              checked={option.label == checked}
            />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4">{option.label}</p>
          </label>
        ))}
      </fieldset>
    </div>
  );
}
