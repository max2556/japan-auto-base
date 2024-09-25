import { api } from "../utils/axios";
import { BaseEntity } from "./base";
import { PaginationsParams } from "./pagination";

export interface AuctionPosition extends BaseEntity {
  mark: string;
  model: string;
  registrationYear: number;
  mileageInKm: number;
  engineCapacity: string;
  transmission: string;
  color: string;
  bodyModel: string;
  auctionDate: string;
  lotNumber: string;
  modification: string;
  startPrice: number;
  finalPrice: number;
  result: "продан" | "доступен" | "не доступен" | "не известен";
  auctionValuation: string;
  auctionId: number;
  auction?: {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
  };
  photos: string[];
}

export interface Auction {
  id: 0;
  createdAt: string;
  updatedAt: string;
  title: string;
  positions: AuctionPosition[];
}

export interface AuctionPositionsParams extends PaginationsParams<AuctionPosition> {
  startMileageInKm?: number
  endMileageInKm?: number
  startRegistrationYear?: number
  endRegistrationYear?: number
}

export const getAuctionPositions = async (
  params?: AuctionPositionsParams
) => {
  const { data } = await api.get<{
    positions: AuctionPosition[];
    count: number;
  }>(`/auctions/positions`, {
    params,
  });
  return data;
};
