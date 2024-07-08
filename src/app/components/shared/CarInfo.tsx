import Link from "next/link";
import Image from "next/image";
import { AuctionHammerIcon } from "./icons/AuctionHammerIcon";
import { TagIcon } from "./icons/TagIcon";
import { GearIcon } from "./icons/GearIcon";
import { StarIcon } from "./icons/StarIcon";
import { RubleIcon } from "./icons/RubleIcon";

export interface CarProps {
  id: number | string;
  title: string;
  price: string | number;
  grade: string | null;
  lotIndex: string | number | null;
  auctionTitle: string | null;
  soldDate: string;
  releaseDate: string | number;
  engineCapacity: string | null;
  enginePower: string | null;
  mileage: string | number | null;
  bodyType: string | null;
}

export default function CarInfo({
  id,
  title,
  price,
  grade,
  lotIndex,
  auctionTitle,
  soldDate,
  releaseDate,
  engineCapacity,
  enginePower,
  mileage,
  bodyType,
}: CarProps) {
  const convertDate = (date: string) => {
    const splitted = date?.split("T")[0];
    if (splitted)
      return splitted
        .split("-") // [2024, 01, 01]
        .reverse() // [01, 01, 2024]
        .join("."); // 2024.01.01

    return date;
  };

  return (
    <Link
      href={`/online-auction/${id}`}
      className="min-h-36 grid xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 bg-white rounded-10 p-3"
    >
      {/* Car Image & Name */}
      <div className="mt-auto">
        <Image
          src="/assets/images/img-car-1.svg"
          alt="Car Image"
          width={500}
          height={350}
          className=""
        />
        <h3>{title}</h3>
      </div>
      
      {/* Info */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* Auction info */}
        <ul className="space-y-1">
          <li className="flex items-center gap-1">
            <RubleIcon />
            {price}
          </li>

          {grade ? (
            <li className="flex items-center gap-1">
              <StarIcon />
              Оценка: <span>{grade}</span>
            </li>
          ) : (
            ""
          )}

          {lotIndex ? (
            <li className="flex items-center gap-1">
              <TagIcon />
              {lotIndex} лот
            </li>
          ) : (
            ""
          )}

          {auctionTitle ? (
            <li className="flex items-center gap-1">
              <AuctionHammerIcon />
              {auctionTitle}
            </li>
          ) : (
            ""
          )}

          <li className="flex items-center gap-1 pl-6">
            {convertDate(soldDate)}
          </li>
        </ul>
        {/* Tech Char */}
        <div className="bg-brand-gray-100 rounded-7">
          <ul className="space-y-1 p-1">
            <li className="flex items-center gap-1">
              <GearIcon />
              {bodyType}
            </li>
            {releaseDate ? <li className="pl-6">{releaseDate} г.</li> : ""}
            {engineCapacity ? (
              <li className="pl-6">{engineCapacity} л.</li>
            ) : (
              ""
            )}
            {enginePower ? <li className="pl-6">{enginePower} л.с.</li> : ""}
            {mileage ? <li className="pl-6">{mileage} км.</li> : ""}
          </ul>
        </div>
      </div>
    </Link>
  );
}
