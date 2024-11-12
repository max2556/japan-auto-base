import React from "react";
import { CityType } from "./Calculator";
import { Radio } from "../../shared/Radio";

const options: {
  label: string;
  value: CityType;
}[] = [
  {
    label: "Санкт-Петербург",
    value: "Saint-Petersburg",
  },
  {
    label: "Москва",
    value: "Moscow",
  },
  {
    label: "Краснодар",
    value: "Krasnodar",
  },
  {
    label: "Екатеринбург",
    value: "Ekaterinburg",
  },
  {
    label: "Новосибирск",
    value: "Novosibirsk",
  },
  {
    label: "Красноярск",
    value: "Krasnoyarsk",
  },
  {
    label: "Иркутск",
    value: "Irkutsk",
  },
  {
    label: "Чита",
    value: "Chita",
  },
  {
    label: "Якутск",
    value: "Yakutsk",
  },
] as const;

interface Props {
  onClick: (val?: CityType) => void;
}

export default function City({ onClick }: Props) {
  return (
    <div className="no-scroll col-span-1 sm:col-span-1 h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Город</h4>
      <Radio
        name="city"
        options={options}
        onChange={onClick}
        defaultChecked="Saint-Petersburg"
      ></Radio>
    </div>
  );
}
