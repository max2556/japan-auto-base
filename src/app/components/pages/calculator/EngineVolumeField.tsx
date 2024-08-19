interface Props {
  onChange: (val: number) => void;
}

export default function EngineVolumeField({ onChange }: Props) {
  return (
    <div className="gap-2 bg-white rounded-10 p-4">
      <input
        // type="number"
        placeholder="Объем двигателя (см3)"
        className="w-full h-8 bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line rounded-5 py-2 pl-4 pr-2"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <p className="text-xs">Если объем не указан, считается, что он равен 1600</p>
    </div>
  );
}
