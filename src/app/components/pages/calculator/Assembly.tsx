import React from "react";
import { Radio } from "../../shared/Radio";

const options = [
  {
    label: "Требуется",
    value: true
  },
  {
    label: "Не требуется",
    value: false,
  },
] as const;

interface Props {
  onClick: (val?: boolean) => void;
}

export default function Assembly({ onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Сборка</h4>
      <Radio
        name="needAssembly"
        options={options}
        onChange={onClick}
        defaultChecked={true}
      ></Radio>
    </div>
  );
}
