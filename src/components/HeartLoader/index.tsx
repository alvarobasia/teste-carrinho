import styles from "./styles.module.css";
export default function HeartLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.heart}>
        <div></div>
      </div>
      <p>Carregando...</p>
    </div>
  );
}
