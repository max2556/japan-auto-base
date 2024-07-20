'use client'
import { useState } from "react";
import Calculator from "../components/pages/calculator/Calculator";

export default function Page() {
  const [resultPrice, setResultPrice] = useState(0);
  const [inputPrice, setInputPrice] = useState(0);
  const [japanExpenses, setJapanExpenses] = useState(0);
  const [russiaExpenses, setRussiaExpenses] = useState(0);
  const [disassemblyPrice, setDisassemblyPrice] = useState(0);
  const [customsExpenses, setCustomsExpenses] = useState(0);
  const [comission, setCommission] = useState(0);
  const [evacuationPrice, setEvacuationPrice] = useState(0);
  const [assemblyPrice, setAssemblyPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  return (
    <div className="bg-brand-gray">
      <section className="max-w-6xl mx-auto space-y-4 -mt-10 px-4 lg:px-7">
        <div className="lg:pr-6 space-y-1">
          <h2>Калькулятор</h2>
          <p className="text-sm leading-4">
            Здесь вы можете рассчитать стоимости распила или конструкторов с
            аукциона. Для расчета необходимо:
          </p>
        </div>
        <ul className="list-decimal text-sm leading-5 mt-5 pl-5">
          <li>Укажите стоимость автомобиля в йенах</li>
          <li>Выберите тип ввоза: распил или конструктор</li>
          <li>Выберите тип автомобиля: легковой, автобус или джип.</li>
          <li>Укажите нужна ли Вам сборка</li>
        </ul>
        <Calculator
          onClick={(prices) => {
            setInputPrice(prices.inputPrice);
            setJapanExpenses(prices.japanExpenses);
            setRussiaExpenses(prices.russiaExpenses);
            setDisassemblyPrice(prices.disassemblyPrice);
            setCustomsExpenses(prices.customsExpenses);
            setCommission(prices.comission);
            setEvacuationPrice(prices.evacuationPrice);
            setAssemblyPrice(prices.assemblyPrice);
            setDeliveryPrice(prices.deliveryPrice);
            setResultPrice(prices.resultPrice);
          }}
        />
      </section>
      <div className="h-[0.1875rem] bg-brand-red mt-8"></div>
      <section>
        <div className="max-w-4xl mx-auto space-y-4 -mt-10 px-4 lg:px-6">
          <h2>Результаты расчета</h2>
          {/* Data */}
          <ul className="space-y-4 bg-white rounded-10 p-3">
            <li className="space-y-1">
              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="20" height="20" fill="white" />
                  <rect
                    x="3"
                    y="3"
                    width="14"
                    height="14"
                    rx="7"
                    fill="#A4031F"
                  />
                  <path
                    d="M10.4688 10.8949H7.36932V9.90909H10.4347C10.6657 9.90909 10.8551 9.875 11.0028 9.80682C11.1506 9.73864 11.2595 9.64205 11.3295 9.51705C11.3996 9.39205 11.4347 9.24432 11.4347 9.07386C11.4347 8.9072 11.3996 8.75663 11.3295 8.62216C11.2595 8.48769 11.1525 8.38068 11.0085 8.30114C10.8646 8.22159 10.6847 8.18182 10.4688 8.18182H9.41761V13H8.19602V7.18182H10.4688C10.929 7.18182 11.3229 7.2642 11.6506 7.42898C11.9801 7.59186 12.232 7.81534 12.4062 8.09943C12.5805 8.38163 12.6667 8.7017 12.6648 9.05966C12.6667 9.43466 12.5786 9.75947 12.4006 10.0341C12.2225 10.3087 11.9688 10.5208 11.6392 10.6705C11.3097 10.8201 10.9195 10.8949 10.4688 10.8949ZM10.6875 11.2699V12.2557H7.36932V11.2699H10.6875Z"
                    fill="white"
                  />
                </svg>
                <h2 className="text-brand-red leading-5">
                  Итоговая стоимость: {resultPrice.toFixed(2)} ₽
                </h2>
              </div>
              <p className="text-sm leading-4">
                Цена является приблизительной, включает в себя нижеперечисленные
                компоненты.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Стоимость авто на аукционе: {inputPrice} ¥
              </h2>
              <p className="text-sm leading-4">
                Изначальная стоимость покупки на аукционе.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Расходы в Японии: {japanExpenses} ¥
              </h2>
              <p className="text-sm leading-4">
                Складывается из комиссии аукциона, комиссии за покупку и
                доставку до порта.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Расходы в России: {russiaExpenses} ₽
              </h2>
              <p className="text-sm leading-4">Пошлина на физическое лицо.</p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Разбор авто и Фрахт: {disassemblyPrice} ₽
              </h2>
              <p className="text-sm leading-4">
                Плата за перевозку груза морским путем.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Услуги растамаживания: {customsExpenses} ₽
              </h2>
              <p className="text-sm leading-4">
                Складывается из цен на растамаживание авто, выгрузку авто,
                хранение на складе временного хранения, услуги брокера,
                получение свидетельства о безопасности конструкции транспортного
                средства, фото опись и приемки авто, транспортировку на стоянку
                компании.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Комиссия: {comission} ₽
              </h2>
              <p className="text-sm leading-4">
                Комиссия нашей компании за выполненную работу.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Эвакуатор с таможни: {evacuationPrice} ₽
              </h2>
              <p className="text-sm leading-4">
                Забирает автомобиль с таможни.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Сборка: {assemblyPrice} ₽
              </h2>
              <p className="text-sm leading-4">
                Расходы необходимые для сборки автомобиля.
              </p>
            </li>
            <li className="space-y-1">
              <h2 className="text-base lg:text-xl leading-4">
                Доставка: {deliveryPrice} ₽
              </h2>
              <p className="text-sm leading-4">
                Расходы необходимые для доставки автомобиля в ваш город.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
