import { Filters } from "../components/shared/FiltersCotainer";

//TODO: fix
export type FiltersRecord<T extends object> = Record<
  //@ts-ignore
  `filters[${keyof T}]`,
  string
>;

export function parseFilters<T extends object>(
  filters: Filters
): FiltersRecord<T> {
  const preparedFilterValues = Object.entries(filters)
    .filter(([_, value]) => value)
    .map(([key, value]) => {
      if (value) return [`filters[${key}]`, value];
    });

  //TODO:fix
  //@ts-ignore
  const preparedFilters = Object.fromEntries(preparedFilterValues);
  return preparedFilters as FiltersRecord<T>;
}
