import React from "react";
import Button from "./Button";

const options = [
  {
    label: "Любая3",
  },
  {
    label: "S",
  },
  {
    label: "6",
  },
  {
    label: "5",
  },
  {
    label: "3",
  },
  {
    label: "4",
  },
  {
    label: "M",
  },
];

export interface FilterBrandProps {
  value?: string;
  onChange: (value: string) => void;
}

export default function FilterGrade({ value, onChange }: FilterBrandProps) {
  return (
    <div className="h-140 sm:h-220 space-y-2">
      <div className="no-scroll h-[9.0625rem] space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
        <h4>Оценка</h4>
        <fieldset className="space-y-2">
          {options.map((option) => (
            <label
              key={option.label}
              htmlFor={"grade_" + option.label}
              className="flex gap-2.5 text-sm cursor-pointer"
              onClick={() => onChange(option.label)}
            >
              <input
                type="radio"
                id={"grade_" + option.label}
                name="grade"
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
      <div className="w-full grid place-content-center bg-white rounded-10 py-4">
        <Button blue className="h-8 !w-full">
          Применить
        </Button>
      </div>
    </div>
  );
}
