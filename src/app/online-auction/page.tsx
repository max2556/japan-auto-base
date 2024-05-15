import CarInfo from '../components/shared/CarInfo';
import OnlieAuction from '../components/shared/OnlieAuction';

export default function Page() {
  return (
    <div className="bg-brand-gray -my-24 py-20">
      <OnlieAuction />
      <div className="h-[0.1875rem] bg-brand-red"></div>
      {/* Search Results */}
      <section className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
        <h2>Резултаты поиска</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, idx) => (
            <CarInfo key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
