export default async function getProductsBelow() {
  const result = fetch("http://teste-carrinho-eta.vercel.app/api/below", {
    mode: "no-cors",
  }).then((response) => response.json());
  return result;
}
