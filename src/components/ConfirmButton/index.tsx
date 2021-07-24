import clsx from "clsx";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import styles from "./styles.module.css";

export default function ConfirmButton() {
  const { loading } = useContext(ShoppingCartContext);
  return (
    <div className={styles.buttonContainer}>
      <button
        disabled={loading}
        className={clsx(
          loading ? styles.confirmButtonDisabled : styles.confirmButton
        )}
      >
        Finalizar compra
      </button>
    </div>
  );
}
