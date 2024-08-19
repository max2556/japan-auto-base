import React from "react";
import { BodyType } from "./Calculator";
import { Radio } from "../../shared/Radio";

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
  onClick: (val?: BodyType) => void;
}

export default function VehicleType({ onClick }: Props) {
  return (
    <div className="no-scroll h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-4 pr-2">
      <h4>Тип автомобиля</h4>
      <Radio
        name="vehicleType"
        options={options}
        onChange={onClick}
        defaultChecked="light"
      ></Radio>
    </div>
  );
}
