export default async function getProductsBelow() {
  const result = fetch("http://localhost:3000/api/productsBelow").then(
    (response) => response.json()
  );
  return result;
}
