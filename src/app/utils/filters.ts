import { Filters } from "../components/shared/FiltersCotainer";
import { anyOptionValue } from "../components/shared/Radio";

//TODO: fix
export type FiltersRecord<T extends object> = Record<
  //@ts-ignore
  `filters[${keyof T}]`,
  string
>;

export function parseFilters<T extends object>(
  filters: Filters,
): FiltersRecord<T> {
  const preparedFilterValues = Object.entries(filters)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value && value != anyOptionValue)
    .map(([key, value]) => {
      if (key == "engineCapacity") {
        return [`filters[${key}]`, value * 1000 + "cc"];
      }
      return [`filters[${key}]`, value];
    });

  //TODO:fix
  //@ts-ignore
  const preparedFilters = Object.fromEntries(preparedFilterValues);
  return preparedFilters as FiltersRecord<T>;
}
