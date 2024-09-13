import Image from "next/image";
import { CarIcon } from "../components/shared/icons/CarIcon";

const tableData = [
  { city: "Ачинск", distance: 5315, duration: 10, cost: 102000 },
  { city: "Барнаул", distance: undefined, duration: 10, cost: 142500 },
  { city: "Благовещенск", distance: 1460, duration: 3, cost: 42000 },
  { city: "Воронеж", distance: 9273, duration: 18, cost: 147000 },
  { city: "Екатеринбург", distance: 9327, duration: 14, cost: 120000 },
  { city: "Ижевск", distance: undefined, duration: 18, cost: 135000 },
  { city: "Иркутск", distance: 4114, duration: 6, cost: 75000 },
  { city: "Казань", distance: 8547, duration: 18, cost: 135000 },
  { city: "Канск", distance: undefined, duration: 8, cost: 90000 },
  { city: "Кемерово", distance: 5681, duration: 10, cost: 102000 },
  { city: "Киров", distance: undefined, duration: 20, cost: 147000 },
  { city: "Краснодар", distance: 10016, duration: 20, cost: 147000 },
  { city: "Красноярск", distance: 5153, duration: 8, cost: 90000 },
  { city: "Курган", distance: 7317, duration: 12, cost: 120000 },
  { city: "Москва", distance: 9100, duration: 18, cost: 135000 },
  { city: "Набережные Челны", distance: 8100, duration: 18, cost: 135000 },
  { city: "Нижний Новгород", distance: 8743, duration: 18, cost: 135000 },
  { city: "Новосибирск", distance: 5937, duration: 10, cost: 102000 },
  { city: "Омск", distance: 6582, duration: 12, cost: 120000 },
  { city: "Пенза", distance: 8827, duration: 18, cost: 135000 },
  { city: "Пермь", distance: 7893, duration: 14, cost: 127500 },
  { city: "Ростов-на-Дону", distance: 9743, duration: 18, cost: 147000 },
  { city: "Рязань", distance: undefined, duration: 18, cost: 135000 },
  { city: "Самара", distance: 8457, duration: 18, cost: 147000 },
  { city: "Санкт-Петербург", distance: 9722, duration: 20, cost: 147000 },
  { city: "Саратов", distance: 8655, duration: 18, cost: 147000 },
  { city: "Свободный", distance: undefined, duration: 3, cost: 75000 },
  { city: "Сковоровино", distance: undefined, duration: 3, cost: 75000 },
  { city: "Тайшет", distance: undefined, duration: 8, cost: 90000 },
  { city: "Томск", distance: undefined, duration: 10, cost: 102000 },
  { city: "Тулун", distance: undefined, duration: 8, cost: 90000 },
  { city: "Тюмень", distance: 7210, duration: 14, cost: 120000 },
  { city: "Улан-Уде", distance: 3670, duration: 5, cost: 75000 },
  { city: "Уфа", distance: 8007, duration: 14, cost: 120000 },
  { city: "Хабаровск", distance: 761, duration: 2, cost: 27000 },
  { city: "Чебоксары", distance: 8450, duration: 18, cost: 135000 },
  { city: "Челябинск", distance: 7579, duration: 14, cost: 120000 },
  { city: "Чита", distance: 3015, duration: 5, cost: 75000 },
  { city: "Юрга", distance: undefined, duration: 10, cost: 102000 },
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
                      {item.distance ? (
                        <>
                          {item.distance} <span className="sm:hidden">км</span>
                          <span className="hidden sm:inline-block">
                            километров
                          </span>
                        </>
                      ) : (
                        <span>--</span>
                      )}
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
