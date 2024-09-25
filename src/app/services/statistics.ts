import { cache } from "react";
import { api } from "../utils/axios";
import { PaginationsParams } from "./pagination";
import { AuctionPosition } from "./auctions";

export interface Statistic extends AuctionPosition {}

export const getStatistics = async (params?: PaginationsParams<Statistic>) => {
  try {
    const { data } = await api.get<{ positions: Statistic[]; count: number }>(
      "/auctions/positions",
      {
        params: {
          ...params,
          needStatisticPositions: true,
        },
      }
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const cachedGetStatistics = cache(getStatistics);
