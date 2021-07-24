export default async function getProductsFree() {
  const result = fetch("http://localhost:3000/api/productsMore").then(
    (response) => response.json()
  );
  return result;
}
