import React from "react";

const options = [
  {
    label: "Требуется",
  },
  {
    label: "Не требуется",
  },
] as const;

interface Props {
  onClick: (val: boolean) => void;
}

export default function Assembly({ onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Сборка</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-1 text-sm cursor-pointer"
            onChange={() => onClick(option.label == "Требуется")}
          >
            <input
              type="radio"
              id={option.label}
              name="needAssembly"
              className="hidden"
              defaultChecked={option.label == "Требуется"}
            />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4 sm:whitespace-nowrap">{option.label}</p>
          </label>
        ))}
      </div>
    </div>
  );
}
