import React from "react";
import styles from "./Logo.module.css"

export const Logo = () => {
  return (
    <a className="flex-column-center margin-bottom-4" href="/index.html">
      <img className={styles.logo} src="/assets/bulb.svg" alt="logo" />
      <h1>
        kwizz<span className="darkyellow">it!</span>
      </h1>
    </a>
  );
};
