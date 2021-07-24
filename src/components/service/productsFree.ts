export default async function getProductsFree() {
  const result = fetch("http://localhost:3000/api/freeShip").then((response) =>
    response.json()
  );
  return result;
}
