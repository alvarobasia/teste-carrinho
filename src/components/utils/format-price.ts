export default function formatPrice(price: number) {
  let newPrice = (price / 100.0).toString();

  if (!newPrice.includes(".")) {
    newPrice = `${newPrice}.00`;
  }

  const [value, cents] = newPrice.split(".");

  return `${value},${cents.padEnd(2, "0")}`;
}
