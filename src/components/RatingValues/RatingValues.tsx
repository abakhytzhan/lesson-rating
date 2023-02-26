import styles from "./RatingValues.module.css";

const RatingValues = () => {
  return (
    <div className={styles.buttons}>
      <input id="rating1" name="rating" type="radio" value={1} />
      <label htmlFor="rating1">1</label>
      <input id="rating2" name="rating" type="radio" value={2} />
      <label htmlFor="rating2">2</label>
      <input id="rating3" name="rating" type="radio" value={3} />
      <label htmlFor="rating3">3</label>
      <input id="rating4" name="rating" type="radio" value={4} />
      <label htmlFor="rating4">4</label>
      <input id="rating5" name="rating" type="radio" value={5} />
      <label htmlFor="rating5">5</label>
    </div>
  );
};

export default RatingValues;
