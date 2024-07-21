import { cache } from "react";
import { api } from "../utils/axios";
import { BaseEntity } from "./base";
import { PaginationsParams } from "./pagination";

export interface Catalog extends BaseEntity {
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

export const getCatalog = async (params?: PaginationsParams<Catalog>) => {
  const { data } = await api.get<{ autos: Catalog[]; count: number }>(
    "/statistic",
    {
      params,
    }
  );
  return data;
};

export const cachedGetCatalog = cache(getCatalog);
