import _ from "lodash";
import { api } from "../utils/axios";

export const getAutoBodyModel = async (mark: string, model: string) => {
  const { data } = await api.get<{ bodyModels: string[] }>(
    "/auctions/models-by-mark",
    {
      params: {
        mark,
        model,
      },
    }
  );

  return _.uniq(data.bodyModels);
};

export const getAuctionFiltersOptions = async () => {
  const { data } = await api.get<AuctionFiltersOptions>("/auctions/positions/filters");
  return data;
};

export interface AuctionFiltersOptions {
  marks: Array<{
    title: string;
    models: Array<{
      title: string;
      bodies: Array<{ title: string }>;
    }>;
  }>;
}
