import { cache } from "react";
import { api } from "../utils/axios";
import { BaseEntity } from "./base";
import { PaginationsParams } from "./pagination";

export interface Statistic extends BaseEntity {
  mark: string;
  model: string;
  registrationYear: number;
  mileageInKm: number;
  engineCapacity: string;
  transmission: string;
  color: string;
  bodyModel: string;
  price: number;
  description: string;
}

export const getStatistics = async (params?: PaginationsParams<Statistic>) => {
  try {

    const { data } = await api.get<{ autos: Statistic[]; count: number }>(
      "/statistic",
      {
        params,
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const cachedGetStatistics = cache(getStatistics);
