import { FiltersRecord } from "../utils/filters";

export type PaginationsParams<T extends object = object> = {
  page?: number;
  limit?: number;
  expanded?: boolean;
  sort?: "ASC" | "DESC";
  sortBy?: keyof T;
} & Partial<FiltersRecord<T>>;