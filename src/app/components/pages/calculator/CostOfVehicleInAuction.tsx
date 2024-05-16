import Button from '../../shared/Button';

export default function CostOfVehicleInAuction() {
  return (
    <div className="col-span-3 sm:col-span-2 lg:col-span-2 space-y-2">
      <div className="gap-2 bg-white rounded-10 p-4">
        <input
          type="text"
          placeholder="Стоимость авто на аукционе (йены)"
          className="w-full h-8 bg-brand-gray-100 text-sm outline-none placeholder:text-brand-dark placeholder:whitespace-pre-line rounded-5 py-2 pl-4 pr-2"
        />
      </div>
      <div className="grid place-content-center lg:bg-white rounded-10 p-3 lg:p-4">
        <Button blue className="w-full">
          Расчитать
        </Button>
      </div>
    </div>
  );
}
