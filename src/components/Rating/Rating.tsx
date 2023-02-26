import { FormEvent } from "react";
import RatingValues from "../RatingValues/RatingValues";
import { useRouter } from "next/router";
import styles from "./Rating.module.css";

const Rating = () => {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = Object.fromEntries(formData);
    console.log(form);
    router.push(`/cheers/${form.rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <RatingValues />
      <button className={styles.submit} type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Rating;
