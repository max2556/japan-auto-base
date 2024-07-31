import { Filters } from "./FiltersCotainer";

interface Props {
  value?: string;
  onChange: (field: keyof Filters, value: string | undefined) => void;
}

export default function FilterMilageYearManifacture({onChange}: Props) {
  return (
    <div className="sm:h-220 col-span-2 sm:col-span-1 flex items-center sm:flex-col gap-2">
      {/* Milage */}
      <div className="w-full grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="number"
          placeholder="Пробег от"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3"
          onChange={(e) => onChange("startMileageInKm", e.target.value)}
        />
        <input
          type="number"
          placeholder="До (км)"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3"
          onChange={(e) => onChange("endMileageInKm", e.target.value)}
        />
      </div>
      {/* Year */}
      <div className="w-full grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="number"
          placeholder="Год от"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3"
          onChange={(e) => onChange("startRegistrationYear", e.target.value)}
        />
        <input
          type="number"
          placeholder="До"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3"
          onChange={(e) => onChange("endRegistrationYear", e.target.value)}
        />
      </div>
    </div>
  );
}
