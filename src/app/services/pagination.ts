//TODO: fix
//@ts-ignore
export type Filters<T extends object> = Record<`filters[${keyof T}]`, string>;
export type PaginationsParams<T extends object = object> = {
  page?: number;
  limit?: number;
  expanded?: boolean;
  sort?: "ASC" | "DESC";
  sortBy?: keyof T;
} & Partial<Filters<T>>;