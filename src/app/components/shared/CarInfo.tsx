import Link from "next/link";
import Image from "next/image";

interface CarProps {
  id: number | string;
  title: string;
  price: string | number;
  grade: string;
  lotIndex: string | number;
  auctionTitle: string;
  soldDate: string;
  releaseDate: string | number;
  engineCapacity: string;
  enginePower?: string;
  mileage: string | number;
  bodyType: string;
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

  const convertCCtoLitre = (engineCapacity: string) => {
    const value = engineCapacity.split("cc")[0];
    return Number(value) / 1000;
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
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                width="20"
                height="20"
                transform="translate(0.5)"
                fill="white"
              />
              <rect
                x="3.5"
                y="3"
                width="14"
                height="14"
                rx="7"
                fill="#A4031F"
              />
              <path
                d="M10.9688 10.8949H7.86932V9.90909H10.9347C11.1657 9.90909 11.3551 9.875 11.5028 9.80682C11.6506 9.73864 11.7595 9.64205 11.8295 9.51705C11.8996 9.39205 11.9347 9.24432 11.9347 9.07386C11.9347 8.9072 11.8996 8.75663 11.8295 8.62216C11.7595 8.48769 11.6525 8.38068 11.5085 8.30114C11.3646 8.22159 11.1847 8.18182 10.9688 8.18182H9.91761V13H8.69602V7.18182H10.9688C11.429 7.18182 11.8229 7.2642 12.1506 7.42898C12.4801 7.59186 12.732 7.81534 12.9062 8.09943C13.0805 8.38163 13.1667 8.7017 13.1648 9.05966C13.1667 9.43466 13.0786 9.75947 12.9006 10.0341C12.7225 10.3087 12.4688 10.5208 12.1392 10.6705C11.8097 10.8201 11.4195 10.8949 10.9688 10.8949ZM11.1875 11.2699V12.2557H7.86932V11.2699H11.1875Z"
                fill="white"
              />
            </svg>
            {price}
          </li>
          <li className="flex items-center gap-1">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                width="20"
                height="20"
                transform="translate(0.5)"
                fill="white"
              />
              <path
                d="M10.0245 3.46352C10.1741 3.00287 10.8259 3.00287 10.9755 3.46353L12.1839 7.18237C12.2508 7.38838 12.4428 7.52786 12.6594 7.52786H16.5696C17.054 7.52786 17.2554 8.14767 16.8635 8.43237L13.7001 10.7307C13.5248 10.8581 13.4515 11.0838 13.5184 11.2898L14.7268 15.0086C14.8764 15.4693 14.3492 15.8523 13.9573 15.5676L10.7939 13.2693C10.6186 13.1419 10.3814 13.1419 10.2061 13.2693L7.04267 15.5676C6.65081 15.8523 6.12357 15.4693 6.27325 15.0086L7.48157 11.2898C7.54851 11.0838 7.47518 10.8581 7.29994 10.7307L4.1365 8.43237C3.74464 8.14767 3.94603 7.52786 4.43039 7.52786H8.34062C8.55723 7.52786 8.74921 7.38838 8.81614 7.18237L10.0245 3.46352Z"
                fill="#0B1736"
              />
            </svg>
            Оценка: <span>{grade}</span>
          </li>
          <li className="flex items-center gap-1">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                width="20"
                height="20"
                transform="translate(0.5)"
                fill="white"
              />
              <path
                d="M9.98767 4.24675C10.1738 4.07003 10.4207 3.97163 10.6774 3.97192L14.785 3.97657C15.3368 3.9772 15.7839 4.42473 15.7838 4.97658L15.7838 9.05868C15.7838 9.32677 15.6762 9.58362 15.485 9.77161L7.86399 17.2675C7.47255 17.6525 6.8439 17.6499 6.45566 17.2616L2.22573 13.0317C1.82804 12.634 1.83641 11.9867 2.24426 11.5994L9.98767 4.24675Z"
                fill="#0B1736"
              />
              <circle cx="12.7773" cy="6.97147" r="1" fill="white" />
            </svg>
            {lotIndex} лот
          </li>
          <li className="flex items-center gap-1">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <rect
                width="20"
                height="20"
                transform="translate(0.5)"
                fill="white"
              />
              <rect x="3.5" y="16" width="8" height="2" rx="1" fill="#0B1736" />
              <rect
                x="11.9141"
                y="9"
                width="8"
                height="2"
                rx="1"
                transform="rotate(45 11.9141 9)"
                fill="#0B1736"
              />
              <rect
                x="4.91406"
                y="8"
                width="8"
                height="2"
                rx="1"
                transform="rotate(45 4.91406 8)"
                fill="#0B1736"
              />
              <rect
                x="10.9141"
                y="2"
                width="8"
                height="2"
                rx="1"
                transform="rotate(45 10.9141 2)"
                fill="#0B1736"
              />
              <rect
                x="5.5"
                y="9.65686"
                width="8"
                height="5"
                transform="rotate(-45 5.5 9.65686)"
                fill="#0B1736"
              />
              <rect
                x="13.5"
                y="14.5355"
                width="5"
                height="1"
                transform="rotate(-45 13.5 14.5355)"
                fill="white"
              />
            </svg>
            {auctionTitle}
          </li>
          <li className="flex items-center gap-1 pl-6">
            {convertDate(soldDate)}
          </li>
        </ul>
        {/* Tech Char */}
        <div className="bg-brand-gray-100 rounded-7">
          <ul className="space-y-1 p-1">
            <li className="flex items-center gap-1">
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
              {bodyType}
            </li>
            {releaseDate && <li className="pl-6">{releaseDate} г.</li>}
            {engineCapacity && (
              <li className="pl-6">{convertCCtoLitre(engineCapacity)} л.</li>
            )}
            {enginePower && <li className="pl-6">{enginePower} л.с.</li>}
            {mileage && <li className="pl-6">{mileage} км</li>}
          </ul>
        </div>
      </div>
    </Link>
  );
}
