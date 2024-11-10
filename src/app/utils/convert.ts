export function convertCCtoLitres(value: string) {
  if (value.includes("cc")) {
    return parseInt(value) / 1000;
  }

  return parseInt(value);
}

export function prettifyNumber(price: string | number) {
  return typeof price === "number"
    ? price.toLocaleString()
    : Number(price).toLocaleString();
}

export function dayTitle(number: number) {
  if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return "дней";
  const last_num = number % 10;
  if (last_num == 1) return "день";
  if ([2, 3, 4].includes(last_num)) return "дня";
  if ([5, 6, 7, 8, 9, 0].includes(last_num)) return "дней";
}
