import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import formatPrice from "../utils/format-price";
import styles from "./styles.module.css";

export default function PriceCard() {
  const [totalPrice, setTotalPrice] = useState<string>(formatPrice(0));
  const [freeShipping, setFreeShipping] = useState(false);
  const { items } = useContext(ShoppingCartContext);

  useEffect(() => {
    const newPrice = items
      .map((product) => product.sellingPrice)
      .reduce((total: number, price: number) => {
        return price + total;
      }, 0);

    setTotalPrice(formatPrice(newPrice));

    if (newPrice / 100 > 10) setFreeShipping(true);
    else setFreeShipping(false);
  }, [items]);

  return (
    <div className={styles.priceCard}>
      <div className={styles.priceCardInfos}>
        <p>Total</p>
        <p>R${totalPrice}</p>
      </div>
      {freeShipping && (
        <div className={styles.free}>
          Parabéns, sua compra tem frete grátis!
        </div>
      )}
    </div>
  );
}
