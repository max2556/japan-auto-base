import { cache } from "react";
import { api } from "../utils/axios";

interface SoldCarsResponse {
  id: 1;
  createdAt: string;
  updatedAt: string;
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
  photos: {
    id: string;
    name: string;
    mimetype: string;
    size: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export const getSoldCars = async (params: {
  page: number;
  limit: number;
  expanded: boolean;
}) => {
  const { data } = await api.get<{ autos: SoldCarsResponse[], count: number }>("/sold-cars", {
    params,
  });
  return data;
};

export const cachedGetSoldCars = cache(getSoldCars);
