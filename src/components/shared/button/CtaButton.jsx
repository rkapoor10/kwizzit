import styles from "./CtaButton.module.css";

export const CtaButton = ({ text, path }) => {
  return (
    <button className={styles.cta} href="/categories/category.html">
      {text}
    </button>
  );
};
