import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { uniqueId } from "lodash";

export interface RadioProps<T> {
  value: string;
  name: string;
  options: readonly {
    readonly label: string;
    readonly value: string;
  }[];
  onChange: (val: string) => void;
  needAnyOption?: boolean;
  anyOptionLabel?: string;
  defaultChecked?: T;
}

export const anyOptionValue = "any";

export function Radio<T>({
  value,
  name,
  options,
  onChange,
  needAnyOption,
  anyOptionLabel,
}: RadioProps<T>) {
  const _options = needAnyOption
    ? [{ label: anyOptionLabel ?? "Любая", value: anyOptionValue }, ...options]
    : options;
  return (
    <RadioGroup className="space-y-2" onValueChange={onChange} value={value}>
      {_options.map((option) => {
        const id = `${option.label}_${name}_${uniqueId()}`;
        return (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.value}
              id={option.value}
              className="shrink-0 grid place-content-center bg-brand-gray-100 rounded-3"
            />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        );

        // return (
        //   <label
        //     key={option.label ?? "any"}
        //     htmlFor={id}
        //     className="flex gap-1 text-sm cursor-pointer"
        //     //TODO: fix
        //     onClick={() => onChange(option.value ?? (option.label as T))}
        //   >
        //     <input
        //       type="radio"
        //       id={id}
        //       name={name}
        //       className="hidden"
        //       defaultChecked={
        //         defaultChecked
        //           ? option.value === defaultChecked
        //           : option.label === undefined
        //       }
        //     />
        //     <div className="w-5 h-5 shrink-0 grid place-content-center bg-brand-gray-100 rounded-3">
        //       <span className="w-3 h-3 hidden bg-brand-red rounded-1.5"></span>
        //     </div>
        //     <p className="leading-4">
        //       {option.label ?? anyOptionLabel ?? "Любая"}
        //     </p>
        //   </label>
        // );
      })}
    </RadioGroup>
  );
}
