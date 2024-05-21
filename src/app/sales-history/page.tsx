import CarInfo from '../components/shared/CarInfo';
import Pagination from '../components/shared/Pagination';

export default function Page() {
  return (
    <div className="bg-brand-gray  ">
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <div className="max-w-96 lg:pr-6 space-y-1">
          <h2>История продаж</h2>
          <p className="text-sm leading-4">
            Здесь находяться проаданные авто, вы можете изучить эти данные!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-2">
          {Array.from({ length: 8 }).map((_, idx) => (
            <CarInfo key={idx} />
          ))}
        </div>
        <Pagination />
      </section>
    </div>
  );
}
