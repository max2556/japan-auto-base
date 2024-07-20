import { BaseEntity } from "./base";

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