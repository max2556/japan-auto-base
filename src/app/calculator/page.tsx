import CarInfo from '../components/shared/CarInfo';
import Pagination from '../components/shared/Pagination';
import Calculator from '../components/shared/Calculator';

export default function Page() {
  return (
    <div className="bg-brand-gray">
      <section className="max-w-6xl mx-auto space-y-4 -mt-10 px-4 lg:px-7">
        <div className="lg:pr-6 space-y-1">
          <h2>Калькулятор</h2>
          <p className="text-sm leading-4">
            Здесь вы можете расчетать стоимости распила или конструкторов с
            аукциона. Чтобы посчитать стоимость распила/конструктора:
          </p>
        </div>
        <ul className="list-decimal text-sm leading-5 mt-5 pl-5">
          <li>Укажите стоимость автомобиля в йенах</li>
          <li>Выберите тип ввоза: распил или конструктор</li>
          <li>Выберите тип автомобиля: легковой, автобус или джип.</li>
          <li>Укажите нужна ли Вам сборка</li>
        </ul>
        <Calculator />
      </section>
    </div>
  );
}
