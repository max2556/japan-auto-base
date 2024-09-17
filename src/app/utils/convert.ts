export function convertCCtoLitres(value: string) {
  if (value.includes("cc")) {
    return parseInt(value) / 1000;
  }
  
  return parseInt(value);
}