"use client";

import React, { useEffect, useState } from "react";
import TypeOfImport from "./TypeOfImport";
import VehicleType from "./VehicleType";
import Assembly from "./Assembly";
import City from "./City";
import CostOfVehicleInAuction from "./CostOfVehicleInAuction";
import Button from "../../shared/Button";
import { api } from "@/app/utils/axios";
import { BaseEntity } from "@/app/services/base";
import EngineVolumeField from "./EngineVolumeField";
import { Radio } from "../../shared/Radio";

export const cityTaxesMap = {
  "Saint-Petersburg": {
    light: 165_000,
    jeep: 165_000,
    bus: 165_000,
  },
  Moscow: {
    light: 155_000,
    jeep: 155_000,
    bus: 155_000,
  },
  Krasnodar: {
    light: 145_000,
    jeep: 145_000,
    bus: 145_000,
  },
  Ekaterinburg: {
    light: 125_000,
    jeep: 125_000,
    bus: 125_000,
  },
  Novosibirsk: {
    light: 95_000,
    jeep: 95_000,
    bus: 95_000,
  },
  Krasnoyarsk: {
    light: 80_000,
    jeep: 80_000,
    bus: 80_000,
  },
  Irkutsk: {
    light: 70_000,
    jeep: 70_000,
    bus: 70_000,
  },
  Chita: {
    light: 60_000,
    jeep: 60_000,
    bus: 60_000,
  },
  Yakutsk: {
    light: 65_000,
    jeep: 65_000,
    bus: 65_000,
  },
} as const;

export const citiesList = Object.keys(cityTaxesMap) as CityType[];
export const importTypeMap = {
  raspil: {
    light: 960,
    jeep: 1600,
    bus: 1500,
  },
  constructor: {
    light: 1100,
    jeep: 1600,
    bus: 1370,
  },
} as const;

function calcCustomsExpenses(
  priceInYen: number,
  yenToRubCurse: number,
  euroToRubCurs: number,
  engine_volume: number,
  years: Years
): number {
  const priceInEur = (priceInYen * yenToRubCurse) / euroToRubCurs;

  const calcIfLessThanThree = (
    priceInEur: number,
    engine_volume: number
  ): number => {
    const priceToPercentageMap = {
      8500: 0.54,
      16700: 0.48,
      42300: 0.48,
      84500: 0.48,
      169000: 0.48,
    };
    const priceToVolumePriceMap = {
      8500: 2.5,
      16700: 3.5,
      42300: 5.5,
      84500: 7.5,
      169000: 15,
    };

    const percentage =
      Object.entries(priceToPercentageMap).find(([key, _]) => {
        return priceInEur <= Number(key);
      })?.[1] ?? 0.48;

    const volumePrice =
      Object.entries(priceToVolumePriceMap).find(([key, _]) => {
        return priceInEur <= Number(key);
      })?.[1] ?? 20;

    return Math.max(priceInEur * percentage, engine_volume * volumePrice);
  };

  const calcIfThreeToFive = (engine_volume: number): number => {
    const volumeToVolumePriceMap = {
      1000: 1.5,
      1500: 1.7,
      1800: 2.5,
      2300: 2.7,
      3000: 3,
    };

    const volumePrice =
      Object.entries(volumeToVolumePriceMap).find(([key, _]) => {
        return engine_volume <= Number(key);
      })?.[1] ?? 3.6;

    return volumePrice * engine_volume;
  };

  const calcMoreThanFive = (engine_volume: number): number => {
    const volumeToVolumePriceMap = {
      1000: 3,
      1500: 3.2,
      1800: 3.5,
      2300: 4.8,
      3000: 5,
    };

    const volumePrice =
      Object.entries(volumeToVolumePriceMap).find(([key, _]) => {
        return engine_volume <= Number(key);
      })?.[1] ?? 5.7;

    return volumePrice * engine_volume;
  };

  switch (years) {
    case Years.LessThanThree:
      return calcIfLessThanThree(priceInEur, engine_volume) * euroToRubCurs;

    case Years.ThreeToFive:
      return calcIfThreeToFive(engine_volume) * euroToRubCurs;

    case Years.MoreThanFive:
      return calcMoreThanFive(engine_volume) * euroToRubCurs;

    default:
      // Unreachable!
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = years;
      break;
  }

  // Unreachable?
  return 0;
}

const assemblyPriceMap = {
  raspil: 20000,
  constructor: 12000,
};

const dopsbor = 239546;

export type BodyType = keyof (typeof cityTaxesMap)[keyof typeof cityTaxesMap];
export type ImportType = keyof typeof importTypeMap;
export type CityType = keyof typeof cityTaxesMap;

function calcSum({
  priceInYen,
  bodyType,
  city,
  needAssembly,
  importType,
  yenToRubCurs,
  euroToRubCurs,
  engineVolume,
  years,
}: {
  priceInYen: number; // Стоимость в рублях
  bodyType: BodyType;
  city: CityType;
  needAssembly: boolean;
  importType: ImportType;
  yenToRubCurs: number;
  euroToRubCurs: number;
  engineVolume: number;
  years: number;
}) {
  const cityTaxRub = cityTaxesMap[city][bodyType];
  const importTypeRub = importTypeMap[importType][bodyType] * euroToRubCurs;
  const calcPriceRub = priceInYen * yenToRubCurs;

  const customsExpenses = calcCustomsExpenses(
    priceInYen,
    yenToRubCurs,
    euroToRubCurs,
    engineVolume,
    years
  );

  let sum =
    calcPriceRub + importTypeRub + dopsbor + cityTaxRub + customsExpenses;
  if (needAssembly) sum += assemblyPriceMap[importType];

  return sum;
}

interface CalculatorProps {
  onClick: (prices: {
    resultPrice: number;
    inputPrice: number;
    japanExpenses: number;
    russiaExpenses: number;
    disassemblyPrice: number;
    customsExpenses: number;
    comission: number;
    evacuationPrice: number;
    assemblyPrice: number;
    deliveryPrice: number;
  }) => void;
}

enum Years {
  LessThanThree,
  ThreeToFive,
  MoreThanFive,
}
const yearsOptions = [
  {
    label: "до 3х лет",
    value: Years.LessThanThree,
  },
  {
    label: "3-5 лет",
    value: Years.ThreeToFive,
  },
  {
    label: "Больше 5 лет",
    value: Years.MoreThanFive,
  },
] as const;

export default function Calculator({ onClick }: CalculatorProps) {
  const [priceInYen, setPrice] = useState(0);
  const [engineVolume, setEngineVolume] = useState(1600);
  const [years, setYears] = useState<Years>(Years.ThreeToFive);
  const [importType, setImportType] = useState<ImportType>("raspil");
  const [vehicleType, setVehicleType] = useState<BodyType>("light");
  const [needAssembly, setNeedAssembly] = useState<boolean>(true);
  const [city, setCity] = useState<CityType>("Saint-Petersburg");
  const [yenToRubCurs, setYenToRubCurs] = useState(0.61);
  const [euroToRubCurs, setEuroToRubCurs] = useState(99.56);

  useEffect(() => {
    //TODO: move to service
    type Currency = "rub" | "yen" | "euro" | "usd";
    const fetchCurrency = async (from: Currency, to: Currency) => {
      try {
        const { data } = await api.get<{
          rate: BaseEntity & {
            from: Currency;
            to: Currency;
            value: number;
          };
        }>("/currency-converter", {
          params: {
            from,
            to,
          },
        });
        return data.rate;
      } catch (err) {
        console.error("Failed to fetch exchange rate");
      }
    };

    const fetchYenToRubles = async () => {
      const response = await fetchCurrency("yen", "rub");
      if (response && "value" in response && response.value)
        setYenToRubCurs(response.value);
    };
    const fetchEuroToRubles = async () => {
      const response = await fetchCurrency("euro", "rub");
      if (response && "value" in response && response.value)
        setEuroToRubCurs(response.value);
    };
    fetchYenToRubles();
    fetchEuroToRubles();
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-3 md:grid-cols-6 gap-2">
      <TypeOfImport onClick={(val) => setImportType(val ?? "constructor")} />
      <VehicleType onClick={(val) => setVehicleType(val ?? "light")} />
      <Assembly onClick={(val) => setNeedAssembly(val ?? true)} />
      <City onClick={(val) => setCity(val ?? "Saint-Petersburg")} />
      <div className="gap-2 bg-white rounded-10 p-4">
        <h3>Возраст</h3>
        <Radio
          name="years"
          options={yearsOptions}
          onChange={(val) => setYears(val ?? Years.ThreeToFive)}
          defaultChecked={Years.ThreeToFive}
        ></Radio>
      </div>
      <div className="col-span-1 xs:col-span-2 md:col-span-3 space-y-2">
        <CostOfVehicleInAuction onChange={(val) => setPrice(val)} />
        <EngineVolumeField onChange={(val) => setEngineVolume(val || 1600)} />

        <div className="flex items-center justify-center sm:bg-white rounded-10 p-3 lg:p-4 min-w-[300px]">
          <Button
            onClick={() =>
              onClick({
                resultPrice: calcSum({
                  priceInYen: priceInYen,
                  bodyType: vehicleType,
                  city: city,
                  needAssembly,
                  importType,
                  yenToRubCurs,
                  euroToRubCurs,
                  engineVolume,
                  years,
                }),
                assemblyPrice:
                  assemblyPriceMap[importType] * (needAssembly ? 1 : 0),
                comission: 49900, //TODO: is it depends on some properties?
                customsExpenses:
                  calcCustomsExpenses(
                    priceInYen,
                    yenToRubCurs,
                    euroToRubCurs,
                    engineVolume,
                    years
                  ) ?? 0,
                deliveryPrice: cityTaxesMap[city][vehicleType],
                disassemblyPrice: 50789, //TODO: is it depends on some properties?
                evacuationPrice: 49900, //TODO: is it depends on some properties?
                inputPrice: priceInYen,
                japanExpenses: 3572, //TODO: is it depends on some properties?
                russiaExpenses: 19900, //TODO: is it depends on some properties?
              })
            }
            blue
            className="sm:w-full sm:h-8"
          >
            Расчитать
          </Button>
        </div>
      </div>
    </div>
  );
}
