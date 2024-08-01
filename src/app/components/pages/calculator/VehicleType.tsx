import React from "react";
import { BodyType } from "./Calculator";

const options: { label: string; value: BodyType }[] = [
  {
    label: "Легковой",
    value: "light",
  },
  {
    label: "Автобус",
    value: "bus",
  },
  {
    label: "Джип",
    value: "jeep",
  },
] as const;

interface Props {
  onClick: (val: BodyType) => void;
}

export default function VehicleType({ onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип автомобиля</h4>
      <fieldset className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-1 text-sm cursor-pointer"
            onChange={() => onClick(option.value)}
          >
            <input
              type="radio"
              id={option.label}
              name="vehicleType"
              className="hidden"
              defaultChecked={option.label == "Легковой"}
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
