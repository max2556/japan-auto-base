import React from "react";
import { Radio } from "../../shared/Radio";

const variants = ["Требуется", "Не требуется"] as const;
const options = variants.map((v) => ({ label: v, value: v }));

interface Props {
  value: boolean;
  onClick: (val?: boolean) => void;
}

export default function Assembly({ value, onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Сборка</h4>
      <Radio
        value={value ? "Требуется" : "Не требуется"}
        name="needAssembly"
        options={options}
        onChange={(v) => onClick(v == "Требуется")}
        defaultChecked={true}
      ></Radio>
    </div>
  );
}
