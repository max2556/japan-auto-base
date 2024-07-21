import React from "react";

const options = [
  {
    label: "Любой",
  },
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
      <fieldset className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label + "_color"}
            className="flex gap-1 text-sm cursor-pointer"
            onClick={() =>
              option.label == "Любой"
                ? onChange(undefined)
                : onChange(option.value)
            }
          >
            <input
              type="radio"
              id={option.label + "_color"}
              name="color"
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
  );
}
