export interface RadioProps {
  name: string;
  options: {
    label?: string;
    value?: string;
  }[];
  onChange: (val?: string) => void;
  needAnyOption?: boolean;
  anyOptionLabel?: string;
}

export function Radio({ name, options, onChange, needAnyOption, anyOptionLabel }: RadioProps) {
  return (
    <fieldset className="space-y-2">
      {(needAnyOption ? [{ label: undefined }, ...options] : options).map(
        (option) => (
          <label
            key={option.label ?? 'first'}
            htmlFor={option.label + `_${name}`}
            className="flex gap-1 text-sm cursor-pointer"
            onClick={() => onChange(option.value ?? option.label)}
          >
            <input
              type="radio"
              id={option.label + `_${name}`}
              name={name}
              className="hidden"
            />
            <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
              <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
            </div>
            <p className="leading-4">{option.label ?? anyOptionLabel ?? "Любая"}</p>
          </label>
        )
      )}
    </fieldset>
  );
}
