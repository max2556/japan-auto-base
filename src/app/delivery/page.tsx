import Image from 'next/image';

const tableData = [
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
  { city: 'Санкт-Петребруг', distance: '12000', duration: '5', cost: '25000' },
  { city: 'Москва', distance: '10000', duration: '4', cost: '22000' },
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="white" />
                  <path
                    d="M3 10C3 9.44772 3.44772 9 4 9H10H16C16.5523 9 17 9.44772 17 10V12C17 12.5523 16.5523 13 16 13H4C3.44772 13 3 12.5523 3 12V10Z"
                    fill="#0B1736"
                  />
                  <path
                    d="M4 13H6C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13Z"
                    fill="#0B1736"
                  />
                  <path
                    d="M7 6.5C7 6.22386 7.22386 6 7.5 6H15.1396C15.6148 6 16 6.38521 16 6.86038C16 6.95286 15.9851 7.04473 15.9558 7.13246L15.2279 9.31623C15.0918 9.72457 14.7097 10 14.2792 10H10C9.44772 10 9 9.55228 9 9V7H7.5C7.22386 7 7 6.77614 7 6.5Z"
                    fill="#0B1736"
                  />
                  <rect
                    x="4"
                    y="11.9834"
                    width="6.71507"
                    height="1"
                    rx="0.5"
                    transform="rotate(-63 4 11.9834)"
                    fill="#0B1736"
                  />
                  <rect
                    x="15"
                    y="13"
                    width="7"
                    height="1"
                    rx="0.5"
                    transform="rotate(-90 15 13)"
                    fill="#0B1736"
                  />
                  <path
                    d="M14 13H16C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13Z"
                    fill="#0B1736"
                  />
                  <rect
                    x="4"
                    y="10"
                    width="1"
                    height="1"
                    rx="0.5"
                    fill="white"
                  />
                </svg>
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
                      {item.duration}{' '}
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
