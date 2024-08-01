import React from "react";
import { CityType } from "./Calculator";
import _ from "lodash";

const options: {
  label: string;
  value: CityType;
}[] = [
  {
    label: "Владивосток",
    value: "vladivostok",
  },
  {
    label: "Ачинск",
    value: "acinsk",
  },
  {
    label: "Барнаул",
    value: "barnaul",
  },
  {
    label: "Благовещенск",
    value: "blagoveshchensk",
  },
  {
    label: "Воронеж",
    value: "voronezh",
  },
  {
    label: "Екатеринбург",
    value: "ekaterinburg",
  },
  {
    label: "Ижевск",
    value: "izhevsk",
  },
  {
    label: "Иркутск",
    value: "irkutsk",
  },
  {
    label: "Казань",
    value: "kazan",
  },
  {
    label: "Канск",
    value: "kansk",
  },
  {
    label: "Кемерово",
    value: "kemerovo",
  },
  {
    label: "Киров",
    value: "kirov",
  },
  {
    label: "Краснодар",
    value: "krasnodar",
  },
  {
    label: "Красноярск",
    value: "krasnoyarsk",
  },
  {
    label: "Курган",
    value: "kurgan",
  },
  {
    label: "Москва",
    value: "moscow",
  },
  {
    label: "Набережные Челны",
    value: "naberezniechelni",
  },
  {
    label: "Нижний Новгород",
    value: "nizhny",
  },
  {
    label: "Новосибирск",
    value: "novosibirsk",
  },
  {
    label: "Омск",
    value: "omsk",
  },
  {
    label: "Пенза",
    value: "penza",
  },
  {
    label: "Пермь",
    value: "perm",
  },
  {
    label: "Ростов-на-Дону",
    value: "rostov",
  },
  {
    label: "Рязань",
    value: "ryazan",
  },
  {
    label: "Самара",
    value: "samara",
  },
  {
    label: "Санкт-Петербург",
    value: "saintpetersburg",
  },
  {
    label: "Саратов",
    value: "saratov",
  },
  {
    label: "Свободный",
    value: "svobodniy",
  },
  {
    label: "Сковоровино",
    value: "skovorodino",
  },
  {
    label: "Тайшет",
    value: "tayshet",
  },
  {
    label: "Томск",
    value: "tomsk",
  },
  {
    label: "Тулун",
    value: "tulun",
  },
  {
    label: "Тюмень",
    value: "tyumen",
  },
  {
    label: "Улан-Уде",
    value: "ulanud",
  },
  {
    label: "Уфа",
    value: "ufa",
  },
  {
    label: "Хабаровск",
    value: "habarovsk",
  },
  {
    label: "Чебоксары",
    value: "cheboksari",
  },
  {
    label: "Челябинск",
    value: "chelyabinsk",
  },
  {
    label: "Чита",
    value: "chita",
  },
  {
    label: "Юрга",
    value: "yurga",
  },
];

interface Props {
  onClick: (val: CityType) => void;
}

export default function City({ onClick }: Props) {
  return (
    <div className="no-scroll col-span-1 sm:col-span-1 h-140 sm:h-220 space-y-3 bg-white overflow-auto rounded-10 py-4 pl-3 pr-1">
      <h4>Город</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.label}
            htmlFor={option.label}
            className="flex gap-1 text-sm cursor-pointer"
            onChange={() => onClick(option.value as CityType)}
          >
            <input
              type="radio"
              id={option.label}
              name="city"
              className="hidden"
              defaultChecked={option.value === "saintpetersburg"}
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
