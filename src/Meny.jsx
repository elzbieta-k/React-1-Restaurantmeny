import Dish from "./Dish";
import styles from "./Meny.module.css";

export default function Meny(props) {
  const dishes = props.meny;

  return (
    <>
      <h1 className={styles.title}>Det Lille Spisestedet</h1>
      <div className={styles.meny}>
        <div className={styles.menyList}>
          {dishes.map((dish, index) => {
            return (
              <p>
                {index + 1}. {dish.tittel} - {dish.pris}
              </p>
            );
          })}
        </div>
        <Dish data={dishes} />
      </div>
    </>
  );
}
