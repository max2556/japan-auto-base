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

export const cityTaxesMap = {
  vladivostok: {
    light: 0,
    jeep: 0,
    bus: 0,
  },
  acinsk: {
    light: 68000,
    jeep: 90000,
    bus: 90000,
  },
  barnaul: {
    light: 95000,
    jeep: 105000,
    bus: 105000,
  },
  blagoveshchensk: {
    light: 28000,
    jeep: 33000,
    bus: 33000,
  },
  volgograd: {
    light: 98000,
    jeep: 108000,
    bus: 108000,
  },
  voronezh: {
    light: 98000,
    jeep: 108000,
    bus: 108000,
  },
  ekaterinburg: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  izhevsk: {
    light: 90000,
    jeep: 100000,
    bus: 100000,
  },
  irkutsk: {
    light: 50000,
    jeep: 50000,
    bus: 58000,
  },
  kazan: {
    light: 90000,
    jeep: 90000,
    bus: 98000,
  },
  kansk: {
    light: 60000,
    jeep: 60000,
    bus: 70000,
  },
  kemerovo: {
    light: 68000,
    jeep: 68000,
    bus: 90000,
  },
  kirov: {
    light: 60000,
    jeep: 60000,
    bus: 70000,
  },
  krasnodar: {
    light: 98000,
    jeep: 98000,
    bus: 108000,
  },
  krasnoyarsk: {
    light: 60000,
    jeep: 70000,
    bus: 70000,
  },
  kurgan: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  moscow: {
    light: 90000,
    jeep: 100000,
    bus: 100000,
  },
  naberezniechelni: {
    light: 90000,
    jeep: 98000,
    bus: 98000,
  },
  nizhny: {
    light: 90000,
    jeep: 100000,
    bus: 100000,
  },
  novosibirsk: {
    light: 68000,
    jeep: 90000,
    bus: 90000,
  },
  omsk: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  penza: {
    light: 90000,
    jeep: 100000,
    bus: 100000,
  },
  perm: {
    light: 85000,
    jeep: 98000,
    bus: 98000,
  },
  rostov: {
    light: 98000,
    jeep: 108000,
    bus: 108000,
  },
  ryazan: {
    light: 90000,
    jeep: 100000,
    bus: 100000,
  },
  samara: {
    light: 85000,
    jeep: 98000,
    bus: 98000,
  },
  saintpetersburg: {
    light: 98000,
    jeep: 98000,
    bus: 108000,
  },
  saratov: {
    light: 98000,
    jeep: 108000,
    bus: 108000,
  },
  svobodniy: {
    light: 50000,
    jeep: 58000,
    bus: 58000,
  },
  skovorodino: {
    light: 50000,
    jeep: 58000,
    bus: 58000,
  },
  tayshet: {
    light: 60000,
    jeep: 70000,
    bus: 70000,
  },
  tomsk: {
    light: 68000,
    jeep: 90000,
    bus: 90000,
  },
  tulun: {
    light: 50000,
    jeep: 58000,
    bus: 58000,
  },
  tyumen: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  ulanud: {
    light: 50000,
    jeep: 58000,
    bus: 58000,
  },
  ufa: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  habarovsk: {
    light: 18000,
    jeep: 23000,
    bus: 23000,
  },
  cheboksari: {
    light: 90000,
    jeep: 98000,
    bus: 98000,
  },
  chelyabinsk: {
    light: 80000,
    jeep: 95000,
    bus: 95000,
  },
  chita: {
    light: 50000,
    jeep: 58000,
    bus: 58000,
  },
  yurga: {
    light: 68000,
    jeep: 90000,
    bus: 90000,
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

const assemblyPriceMap = {
  raspil: 20000,
  constructor: 12000,
};

const dopsbor = 239546;

export type BodyType = keyof (typeof cityTaxesMap)[keyof typeof cityTaxesMap];
export type ImportType = keyof typeof importTypeMap;
export type CityType = keyof typeof cityTaxesMap;

function calcSum({
  value,
  bodyType,
  city,
  needAssembly,
  importType,
  yenToRubCurs,
  euroToRubCurs,
}: {
  value: number; // Стоимость в рублях
  bodyType: BodyType;
  city: CityType;
  needAssembly: boolean;
  importType: ImportType;
  yenToRubCurs: number;
  euroToRubCurs: number;
}) {
  const curs = yenToRubCurs; // Convert yen to rub
  const curs1 = euroToRubCurs; // Convert from dollar to rub

  const cityTaxRub = cityTaxesMap[city][bodyType];
  const importTypeRub = importTypeMap[importType][bodyType] * curs1;
  const calcPriceRub = value * curs;

  let sum = calcPriceRub + importTypeRub + dopsbor + cityTaxRub;
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

export default function Calculator({ onClick }: CalculatorProps) {
  const [inputValue, setInputValue] = useState(0);
  const [importType, setImportType] =
    useState<ImportType>("raspil");
  const [vehicleType, setVehicleType] =
    useState<BodyType>("light");
  const [needAssembly, setNeedAssembly] = useState<boolean>(true);
  const [city, setCity] = useState<CityType>("saintpetersburg");
  const [yenToRubCurs, setYenToRubCurs] = useState(1);
  const [euroToRubCurs, setEuroToRubCurs] = useState(1);

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
        return data.rate ?? 1;
      } catch (err) {
        console.error("Failed to fetch exchange rate");
      }
    };

    const fetchYenToRubles = async () => {
      const response = await fetchCurrency("yen", "rub");
      setYenToRubCurs(response?.value ?? 1);
    };
    const fetchEuroToRubles = async () => {
      const response = await fetchCurrency("euro", "rub");
      setEuroToRubCurs(response?.value ?? 1);
    };
    fetchYenToRubles();
    fetchEuroToRubles();
  }, []);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-3 lg:grid-cols-6 gap-2">
      <TypeOfImport onClick={(val) => setImportType(val)} />
      {/* TODO: how price depends on auto model? */}
      {/* <FilterModel /> */}
      <VehicleType onClick={(val) => setVehicleType(val)} />
      <Assembly onClick={(val) => setNeedAssembly(val)} />
      <City onClick={(val) => setCity(val)} />
      <div className="col-span-1 xs:col-span-2 md:col-span-2 space-y-2">
        <CostOfVehicleInAuction onChange={(val) => setInputValue(val)} />
        <div className="flex items-center justify-center sm:bg-white rounded-10 p-3 lg:p-4">
          <Button
            onClick={() =>
              onClick({
                resultPrice: calcSum({
                  value: inputValue,
                  bodyType: vehicleType,
                  city: city,
                  needAssembly,
                  importType,
                  yenToRubCurs,
                  euroToRubCurs,
                }),
                assemblyPrice:
                  assemblyPriceMap[importType] * (needAssembly ? 1 : 0),
                comission: 49900, //TODO: is it depends on some properties?
                customsExpenses: 49900, //TODO: is it depends on some properties?
                deliveryPrice: cityTaxesMap[city][vehicleType],
                disassemblyPrice: 50789, //TODO: is it depends on some properties?
                evacuationPrice: 49900, //TODO: is it depends on some properties?
                inputPrice: inputValue,
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
