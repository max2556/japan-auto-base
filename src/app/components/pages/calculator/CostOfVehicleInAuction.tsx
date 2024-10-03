interface Props {
  onChange: (val: number) => void;
}

export default function CostOfVehicleInAuction({ onChange }: Props) {
  return (
    <div className="gap-2 bg-white rounded-10 p-4 min-w-[300px]">
      <input
        // type="number"
        placeholder="Стоимость авто на аукционе (йены)"
        className="w-full h-8 bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line rounded-5 py-2 pl-4 pr-2"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
}
