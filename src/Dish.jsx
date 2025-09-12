import styles from "./Dish.module.css";

export default function Dish({ data }) {
  return (
    <>
      <div className={styles.gridContainer}>
        {data.map((dish) => {
          return (
            <div key={dish.id} className={styles.dishCard}>
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
        })}
      </div>
    </>
  );
}
