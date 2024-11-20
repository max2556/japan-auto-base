import React from "react";
import { ImportType } from "./Calculator";
import { Radio } from "../../shared/Radio";

const options: { label: string; value: ImportType }[] = [
  {
    label: "Распил",
    value: "raspil",
  },
  {
    label: "Конструктор",
    value: "constructor",
  },
] as const;

interface Props {
  value: string;
  onClick: (val?: ImportType) => void;
}

export default function TypeOfImport({ value, onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип ввоза</h4>
      <Radio
        value={value}
        name="importType"
        options={options}
        onChange={(v) => onClick(v as ImportType)}
        defaultChecked="raspil"
      ></Radio>
    </div>
  );
}
