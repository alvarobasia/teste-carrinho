export default async function getProductsFree() {
  const result = fetch("https://teste-carrinho-eta.vercel.app/api/over", {
    mode: "no-cors",
  }).then((response) => response.json());
  return result;
}
