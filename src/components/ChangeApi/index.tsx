import { useContext } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import styles from "./styles.module.css";

export default function ChangeApi() {
  const { changeApi } = useContext(ShoppingCartContext);
  return (
    <button onClick={changeApi} className={styles.button}>
      <FaExchangeAlt />
      <p>Mudar API</p>
    </button>
  );
}
