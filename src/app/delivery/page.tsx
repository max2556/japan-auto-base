import Image from "next/image";
import { CarIcon } from "../components/shared/icons/CarIcon";

//TODO: fill actual data
const tableData = [
  { city: "Санкт-Петребруг", distance: "12000", duration: "5", cost: "108000" },
  { city: "Москва", distance: "10000", duration: "4", cost: "100000" },
];

export default function Page() {
  return (
    <>
      <section className="-mt-5">
        <div className="max-w-3xl mx-auto w-full px-4 md:px-9">
          <div className="bg-white rounded-10 overflow-hidden">
            {/* Header */}
            <div className="space-y-1 p-3">
              <div className="flex items-center gap-1">
                <CarIcon />
                <h2>Доставка по РФ</h2>
              </div>
              <p className="text-sm leading-4">
                Ниже приведена таблица с расчетами на доставку по городам
                Российской Федерации.
              </p>
            </div>
            {/* Table */}
            <table className="table-fixed w-full text-sm">
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.city} className="odd:bg-brand-gray-100">
                    <td>{item.city}</td>
                    <td>
                      {item.distance} <span className="sm:hidden">км</span>
                      <span className="hidden sm:inline-block">километров</span>
                    </td>
                    <td className=" whitespace-nowrap">
                      {item.duration}{" "}
                      <span>
                        д<span className="hidden sm:inline-block">ней</span>
                      </span>
                    </td>
                    <td>
                      {item.cost} <span className="sm:hidden">₽</span>
                      <span className="hidden sm:inline-block">рублей</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Delivery Agency */}
          <div className="space-y-4 bg-white mt-4 rounded-10 p-3">
            {/* Title */}
            <div className="space-y-1">
              <h2>Выбор транспартной компании</h2>
              <p className="text-sm leading-4">
                Вы можете самостоятельно выбрать транспортную компанию или
                воспользоваться нашей помощью!
              </p>
            </div>
            {/* Agencies */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-16 text-sm">
              <div className="max-w-[13.1875rem] space-y-4">
                <Image
                  src="/assets/images/img-delivery-agency-1.svg"
                  alt="Sistema"
                  width={170}
                  height={48}
                />
                <div className="space-y-1">
                  <p className=" leading-5">
                    Транспортно-экспедиторская компания ООО “Система”
                  </p>
                  <p>
                    <a
                      href="#"
                      className="font-bold hover:text-brand-red transition-all duration-200"
                    >
                      www.sistemavi.ru
                    </a>
                  </p>
                </div>
              </div>
              <div className="max-w-[13.1875rem] space-y-4">
                <Image
                  src="/assets/images/img-delivery-agency-2.svg"
                  alt="Sistema"
                  width={170}
                  height={48}
                />
                <div className="space-y-1">
                  <p className=" leading-5">
                    Трнаспортная компания “Фрейт-Лайн”
                  </p>
                  <p>
                    <a
                      href="#"
                      className="font-bold hover:text-brand-red transition-all duration-200"
                    >
                      www.Freight-line.ru
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
