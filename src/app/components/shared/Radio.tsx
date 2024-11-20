import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
      })}
    </RadioGroup>
  );
}
