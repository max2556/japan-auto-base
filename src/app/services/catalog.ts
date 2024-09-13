import { cache } from "react";
import { api } from "../utils/axios";
import { BaseEntity } from "./base";

interface Catalog extends BaseEntity {
  color: string;
  mark: string;
  model: string;
  bodyModel: string;
  registrationYear: number;
  engineCapacity: string;
  transmission: string;
  mileageInKm: number;
  price: number;
  description: string;
  photos: (BaseEntity & {
    name: string;
    mimetype: string;
    size: string;
  })[];
}

export const getCatalog = async (params: {
  page: number;
  limit: number;
  expanded: boolean;
}) => {
  try{

    const { data } = await api.get<{ autos: Catalog[], count: number }>("/sold-cars", {
      params,
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const cachedGetCatalog = cache(getCatalog);
