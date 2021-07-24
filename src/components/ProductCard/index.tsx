import { useContext } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { FaWindowClose } from "react-icons/fa";
import { Product, ShoppingCartContext } from "../contexts/ShoppingCartContext";
import formatPrice from "../utils/format-price";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { handleRemoveProduct } = useContext(ShoppingCartContext);

  function handleRemove() {
    handleRemoveProduct(product);
  }

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          width="100"
          height="100"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={styles.infos}>
        <p className={styles.title}>{product.name}</p>
        <p className={styles.price}>R${formatPrice(product.price)}</p>
        <p className={styles.sellingPrice}>
          R${formatPrice(product.sellingPrice)}
        </p>
      </div>
      <FaWindowClose onClick={handleRemove} size={30} className={styles.icon} />
    </div>
  );
}
