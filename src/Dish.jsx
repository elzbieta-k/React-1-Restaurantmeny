import styles from "./Dish.module.css";

export default function Dish(props) {
  const dish = props.data;
  return (
    <div className={styles.dishCard}>
      <h2>{dish.tittel}</h2>
      <p>
        <span>Pris:</span> {dish.pris}
      </p>
      <p>
        <span>Ingredienser:</span> {dish.ingredienser}
      </p>
      <p>
        <span>Kategori:</span> {dish.kategori}
      </p>
    </div>
  );
}
