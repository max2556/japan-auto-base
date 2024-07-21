export interface CheckboxProps {
  name: string;
  options: {
    label?: string;
    value?: string;
  }[];
  onChange: (val?: string) => void;
}

export function Checkbox({ name, options, onChange }: CheckboxProps) {
  return (
    <fieldset className="space-y-2">
      {options.map((option) => (
        <label
          key={option.label}
          htmlFor={option.label + `_${name}`}
          className="flex gap-1 text-sm cursor-pointer"
          onClick={() => onChange(option.label)}
        >
          <input
            type="checkbox"
            id={option.label + `_${name}`}
            name={name}
            className="hidden"
          />
          <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
            <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
          </div>
          <p className="leading-4">{option.label ?? "Любая"}</p>
        </label>
      ))}
    </fieldset>
  );
}
