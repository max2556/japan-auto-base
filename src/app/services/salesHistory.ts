import { api } from "../utils/axios";

interface SoldCarsResponse {
  id: 1;
  createdAt: string;
  updatedAt: string;
  color: string;
  brand: string;
  model: string;
  bodyType: string;
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
  const { data } = await api.get<{ cars: SoldCarsResponse[] }>("/sold-cars", {
    params,
  });
  return data;
};
