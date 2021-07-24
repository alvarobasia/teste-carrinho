import React from "react";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import ChangeApi from "../components/ChangeApi";

export default function Home() {
  return (
    <div className={styles.container}>
      <ChangeApi />
      <Card />
    </div>
  );
}
