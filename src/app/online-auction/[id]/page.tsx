"use client";

import axios from "axios";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SubmitApplicationButton from "@/app/components/shared/SubmitApplicationButton";
import Button from "@/app/components/shared/Button";
import { useEffect, useState } from "react";
import { api } from "@/app/utils/axios";
import { AuctionPosition } from "@/app/services/auctions";

export default function Page({ params }: { params: { id: string | number } }) {
  const [rate, setRate] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [car, setCar] = useState<AuctionPosition | null>(null);

  const getRuColor = (color: string) => {
    const map = {
      BEIGE: "Бежевый",
      BLACK: "Черный",
      BLUE: "Синий",
      BROWN: "Коричневый",
      GREEN: "Зеленый",
      GREY: "Серый",
      ORANGE: "Оранжевый",
      PINK: "Розовый",
      PURPLE: "Фиолетовый",
      RED: "Красный",
      WHITE: "Белый",
      YELLOW: "Желтый",
    };

    const words = color.split(" ");
    //@ts-ignore
    if (words.length > 1) return map[words[0]] ?? map[words[1]] ?? "Неизвестный";
    //@ts-ignore
    return map[color] ?? "Неизвестный";
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const { data } = await api.get("/currency-converter", {
          params: {
            from: "yen",
            to: "rub",
          },
        });
        setRate(data.rate);
      } catch (err) {
        setError("Failed to fetch exchange rate");
      }
    };
    fetchCurrency();
  }, []);

  useEffect(() => {
    const getCar = async () => {
      const response = await api.get<{
        positions: AuctionPosition[];
        count: number;
      }>(`/auctions/positions`, {
        params: {
          page: 1,
          limit: 1,
          expanded: true,
          "filters[id]": params.id,
        },
      });

      setCar(response.data.positions[0]);

      return response;
    };

    getCar();
  }, [params.id]);

  return (
    <>
      {car && (
        <section>
          <div className="max-w-4xl mx-auto space-y-2 px-5">
            {/* Slider */}
            <div className="h-80 sm:h-96 md:h-[25.75rem] relative bg-white rounded-10 p-3">
              {/* Title */}
              <h2 className="text-2xl font-bold font-sansation text-center">
                {car.mark} {car.model}
              </h2>
              {/* Swiper */}
              <Swiper
                navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image
                    src="/assets/images/img-camry.png"
                    alt="Camry"
                    width={648}
                    height={292}
                    className="w-4/5 mx-auto mt-12 lg:mt-7"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/assets/images/img-camry.png"
                    alt="Camry"
                    width={648}
                    height={292}
                    className="w-4/5 mx-auto mt-12 lg:mt-7"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/assets/images/img-camry.png"
                    alt="Camry"
                    width={648}
                    height={292}
                    className="w-4/5 mx-auto mt-12 lg:mt-7"
                  />
                </SwiperSlide>
              </Swiper>
              {/* Custom Navigating Buttons */}
              <div className="w-full absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-between pr-7">
                {/* Left */}
                <button className="prev-btn w-8 h-8 shrink-0 grid place-content-center bg-brand-dark rounded-5">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.74378 1.1381C6.1396 0.710364 6.81586 0.710364 7.21169 1.1381L7.37216 1.31151C7.7266 1.69453 7.72693 2.28571 7.3729 2.66911L3.68175 6.66657C3.32801 7.04967 3.32801 7.64027 3.68175 8.02337L7.3729 12.0208C7.72692 12.4042 7.7266 12.9954 7.37216 13.3784L7.21169 13.5518C6.81586 13.9796 6.1396 13.9796 5.74378 13.5518L0.628521 8.02417C0.273797 7.64084 0.273797 7.0491 0.628522 6.66577L5.74378 1.1381Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {/* Right */}
                <button className="next-btn w-8 h-8 shrink-0 grid place-content-center bg-brand-dark rounded-5">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25622 1.1381C1.8604 0.710364 1.18414 0.710364 0.788311 1.1381L0.627837 1.31151C0.273397 1.69453 0.273075 2.28571 0.627099 2.66911L4.31825 6.66657C4.67199 7.04967 4.67199 7.64027 4.31825 8.02337L0.627099 12.0208C0.273075 12.4042 0.273396 12.9954 0.627837 13.3784L0.788311 13.5518C1.18414 13.9796 1.8604 13.9796 2.25622 13.5518L7.37148 8.02417C7.7262 7.64084 7.7262 7.0491 7.37148 6.66577L2.25622 1.1381Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              {/* Submit Application Button */}
              <Button
                red
                className="absolute bottom-3 left-1/2 -translate-x-1/2 -mt-10"
              >
                Оставить заявку
              </Button>
            </div>
            {/* Data Auction */}
            <div className="grid sm:grid-cols-2 gap-2">
              {/* Table Data Auction */}
              <div className="order-2 sm:order-1 bg-white rounded-10">
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
                      <rect
                        x="3"
                        y="16"
                        width="8"
                        height="2"
                        rx="1"
                        fill="#0B1736"
                      />
                      <rect
                        x="11.4143"
                        y="9"
                        width="8"
                        height="2"
                        rx="1"
                        transform="rotate(45 11.4143 9)"
                        fill="#0B1736"
                      />
                      <rect
                        x="4.41431"
                        y="8"
                        width="8"
                        height="2"
                        rx="1"
                        transform="rotate(45 4.41431 8)"
                        fill="#0B1736"
                      />
                      <rect
                        x="10.4143"
                        y="2"
                        width="8"
                        height="2"
                        rx="1"
                        transform="rotate(45 10.4143 2)"
                        fill="#0B1736"
                      />
                      <rect
                        x="5"
                        y="9.65686"
                        width="8"
                        height="5"
                        transform="rotate(-45 5 9.65686)"
                        fill="#0B1736"
                      />
                      <rect
                        x="13"
                        y="14.5355"
                        width="5"
                        height="1"
                        transform="rotate(-45 13 14.5355)"
                        fill="white"
                      />
                    </svg>

                    <h2>Данные аукциона</h2>
                  </div>
                  <p className="text-sm leading-4">
                    Все известные нам данные об аукцине!
                  </p>
                </div>
                {/* Table */}
                <table className="table-fixed w-full text-sm overflow-hidden">
                  <tbody>
                    <tr className="odd:bg-brand-gray-100">
                      <td>Название аукциона:</td>
                      <td>{car.auction?.title}</td>
                    </tr>
                    <tr className="odd:bg-brand-gray-100">
                      <td>Дата:</td>
                      <td>
                        {
                          car.auctionDate //2024-08-11T16:00:00.000Z
                            .split("T")[0] //2024-08-11
                            .split("-") //2024, 8, 11
                            .reverse() //11, 8, 2024
                            .join(".") //11.08.2024
                        }
                      </td>
                    </tr>
                    <tr className="odd:bg-brand-gray-100">
                      <td>Цена покупки с аукциона:</td>
                      <td>{car.finalPrice}</td>
                    </tr>
                    <tr className="odd:bg-brand-gray-100">
                      <td>Номер лота:</td>
                      <td>{car.lotNumber}</td>
                    </tr>
                    <tr className="odd:bg-brand-gray-100">
                      <td>Оценка:</td>
                      <td>{car.auctionValuation}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Cost & Currency */}
              <div className="order-1 sm:order-2 flex flex-col-reverse sm:flex-col gap-2">
                {/* Cost */}
                <div className="space-y-1 bg-white rounded-10 p-3">
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
                    <h2 className="text-brand-red">
                      Стоимость от: {car.startPrice} ₽
                    </h2>
                  </div>
                  {/* TODO: нужно ли отображать статус автомобиля? "доступен" / "продано" */}
                  <p className="text-sm leading-4">Авто доступно!</p>
                </div>
                {/* Currency */}
                <div className="h-full space-y-1 bg-white rounded-10 p-3">
                  <h2>Курс валют</h2>
                  <p className="max-w-72 text-sm leading-4">
                    Курс валют, являются усреленным значением из коммерческих
                    банков, курсы валют необходимы для вычесления суммарной
                    цены.
                  </p>

                  <p className="font-bold">
                    1 ¥ = {error ?? rate ? `${rate} ₽` : "Loading..."}
                  </p>
                </div>
              </div>
            </div>
            {/* Table Charasteristics */}
            <div className="order-2 sm:order-1 bg-white rounded-10">
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
                    <path
                      d="M9.12006 4.74678C9.30094 3.77103 10.6991 3.77103 10.8799 4.74678C11.0093 5.44476 11.8609 5.72147 12.3759 5.23284C13.0957 4.54976 14.2268 5.37156 13.7996 6.26727C13.4941 6.908 14.0204 7.63243 14.7242 7.5398C15.7081 7.4103 16.1401 8.73999 15.268 9.21354C14.6442 9.55228 14.6442 10.4477 15.268 10.7865C16.1401 11.26 15.7081 12.5897 14.7242 12.4602C14.0204 12.3676 13.4941 13.092 13.7996 13.7327C14.2268 14.6284 13.0957 15.4502 12.3759 14.7672C11.8609 14.2785 11.0093 14.5552 10.8799 15.2532C10.6991 16.229 9.30094 16.229 9.12006 15.2532C8.99067 14.5552 8.13906 14.2785 7.62412 14.7672C6.90426 15.4502 5.77316 14.6284 6.20035 13.7327C6.50594 13.092 5.97961 12.3676 5.27581 12.4602C4.29192 12.5897 3.85988 11.26 4.73198 10.7865C5.35581 10.4477 5.35581 9.55228 4.73198 9.21354C3.85988 8.73999 4.29192 7.4103 5.27581 7.5398C5.97961 7.63243 6.50594 6.908 6.20035 6.26727C5.77316 5.37156 6.90426 4.54976 7.62412 5.23284C8.13906 5.72147 8.99067 5.44476 9.12006 4.74678Z"
                      fill="#0B1736"
                    />
                    <circle cx="10" cy="10" r="2" fill="#EFEFEF" />
                  </svg>
                  <h2>Характеристики</h2>
                </div>
                <p className="text-sm leading-4">
                  Все известные нам данные о машине!
                </p>
              </div>
              {/* Table */}
              <table className="table-fixed w-full text-sm overflow-hidden">
                <tbody>
                  <tr className="odd:bg-brand-gray-100">
                    <td>Тип кузова:</td>
                    <td>{car.bodyModel}</td>
                  </tr>
                  <tr className="odd:bg-brand-gray-100">
                    <td>Год выпуска:</td>
                    <td>{car.registrationYear} г.</td>
                  </tr>
                  <tr className="odd:bg-brand-gray-100">
                    <td>Объем двигателя:</td>
                    <td>
                      {Number(car.engineCapacity.split("cc")[0]) / 1000} л.
                    </td>
                  </tr>
                  {/* <tr className="odd:bg-brand-gray-100">
                  <td>Мощность:</td>
                  <td>{car.}</td>
                </tr> */}
                  <tr className="odd:bg-brand-gray-100">
                    <td>Пробег:</td>
                    <td>{car.mileageInKm} км.</td>
                  </tr>
                  <tr className="odd:bg-brand-gray-100">
                    <td>Тип привода:</td>
                    <td>{car.transmission}</td>
                  </tr>
                  <tr className="odd:bg-brand-gray-100">
                    <td>Цвет кузова:</td>
                    <td>{getRuColor(car.color)}</td>
                  </tr>
                  {/* <tr className="odd:bg-brand-gray-100">
                  <td>Цвет салона:</td>
                  <td>{}</td>
                </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
