export function convertCCtoLitres(value: string) {
  if (value.includes("cc")) {
    return parseInt(value) / 1000;
  }
  
  return parseInt(value);
}

export const prettifyNumber = (price: string | number) =>
  typeof price === "number" ? price.toLocaleString() : Number(price).toLocaleString();
