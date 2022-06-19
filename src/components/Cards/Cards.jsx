import React from "react";
import data from "../../data/data";
import Card from "./components/Card/Card";
import styles from "./Cards.module.css";

export default function Cards() {
  return (
    <div className={styles.cardList}>
      {data.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
}
