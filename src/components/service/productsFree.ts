export default async function getProductsFree() {
  const result = fetch("http://teste-carrinho-eta.vercel.app/api/over", {
    mode: "no-cors",
  }).then((response) => response.json());
  return result;
}
