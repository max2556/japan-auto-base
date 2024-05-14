export default function FilterMilageYearManifacture() {
  return (
    <div className="h-220 space-y-2">
      {/* Milage */}
      <div className="w-full grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="text"
          placeholder="Пробег от (км)"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3 pr-2"
        />
        <input
          type="text"
          placeholder="До (км)"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3 pr-2"
        />
      </div>
      {/* Year */}
      <div className="w-full grid place-content-center gap-2 bg-white rounded-10 p-4">
        <input
          type="text"
          placeholder="Год выпуска от"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3 pr-2"
        />
        <input
          type="text"
          placeholder="До"
          className="w-full h-8 bg-brand-gray-100 outline-none placeholder:text-brand-dark placeholder:text-xs text-sm rounded-5 py-2 pl-3 pr-2"
        />
      </div>
    </div>
  );
}
