import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import ConfirmButton from "../ConfirmButton";
import HeartLoader from "../HeartLoader";
import PriceCard from "../PriceCard";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

export default function Card() {
  const { items, loading } = useContext(ShoppingCartContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Meu Carrinho</h1>
      </div>
      <div className={styles.products}>
        {loading && <HeartLoader />}
        {!loading &&
          items.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
      {!loading && <PriceCard />}
      <ConfirmButton />
    </div>
  );
}
