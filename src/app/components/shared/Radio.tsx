export interface RadioProps<T> {
  name: string;
  options: readonly {
    readonly label?: string;
    readonly value?: T;
  }[];
  onChange: (val?: T) => void;
  needAnyOption?: boolean;
  anyOptionLabel?: string;
  defaultChecked?: T;
}

export function Radio<T>({
  name,
  options,
  onChange,
  needAnyOption,
  anyOptionLabel,
  defaultChecked,
}: RadioProps<T>) {
  return (
    <fieldset className="space-y-2">
      {(needAnyOption ? [{ label: undefined }, ...options] : options).map(
        (option) => (
          <label
            key={option.label ?? "any"}
            htmlFor={option.label + `_${name}`}
            className="flex gap-1 text-sm cursor-pointer"
            //TODO: fix
            onClick={() => onChange(option.value ?? (option.label as T))}
          >
            <input
              type="radio"
              id={option.label + `_${name}`}
              name={name}
              className="hidden"
              defaultChecked={defaultChecked ? option.value === defaultChecked : option.label === undefined}
            />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4">
              {option.label ?? anyOptionLabel ?? "Любая"}
            </p>
          </label>
        )
      )}
    </fieldset>
  );
}
