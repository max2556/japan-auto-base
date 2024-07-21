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

const cityTaxesMap = {
  Москва: {
    Легковой: 100000,
    Джип: 90000,
    Автобус: 100000,
  },
  "С-Петербург": {
    Легковой: 108000,
    Джип: 98000,
    Автобус: 108000,
  },
};

const importTypeMap = {
  Распил: {
    Легковой: 960,
    Автобус: 1500,
    Джип: 1600,
  },
  Конструктор: {
    Легковой: 1100,
    Джип: 1600,
    Автобус: 1370,
  },
};

const assemblyPriceMap = {
  Распил: 20000,
  Конструктор: 12000,
};

const dopsbor = 239546;

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
  bodyType: "Легковой" | "Автобус" | "Джип";
  city: "Москва" | "С-Петербург";
  needAssembly: boolean;
  importType: "Распил" | "Конструктор";
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
  const [importType, setImportType] = useState<"Распил" | "Конструктор">(
    "Распил"
  );
  const [vehicleType, setVehicleType] = useState<
    "Легковой" | "Автобус" | "Джип"
  >("Легковой");
  const [needAssembly, setNeedAssembly] = useState<boolean>(true);
  const [city, setCity] = useState<"Москва" | "С-Петербург">("С-Петербург");
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
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
      <TypeOfImport onClick={(val) => setImportType(val)} />
      {/* TODO: how price depends on auto model? */}
      {/* <FilterModel /> */}
      <VehicleType onClick={(val) => setVehicleType(val)} />
      <Assembly onClick={(val) => setNeedAssembly(val)} />
      <City onClick={(val) => setCity(val)} />
      <div className="col-span-3 sm:col-span-2 md:col-span-2 space-y-2">
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
