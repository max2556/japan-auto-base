import CarInfo from '../components/shared/CarInfo';

export default function Page() {
  return (
    <div className="bg-brand-gray -my-24 py-32">
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <div className="max-w-96 lg:pr-6 space-y-1">
          <h2>Каталог автомобилей</h2>
          <p className="text-sm leading-4">
            Здесь вы можете найт автомобили готовые к покупке! Указанная цена не
            явлеться окончательной!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <CarInfo key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
