import React from "react";
import { CtaButton } from "../shared/button/CtaButton";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <div className={`flex-column-center ${styles.banner}`}>
      <img className={styles.hero} src="/assets/bulb.svg" alt="logo" />
      <h1>
        kwizz<span className="darkyellow">it!</span>
      </h1>
      <div className={`flex-column-center center ${styles.container}`}>
        <h2>
          Welcome 🚀
        </h2>
        <p className="txt-m gray">Play Quiz on some of the greatest Animes.</p>
        <p className="txt-m align-center w-80">
          We at kwizz<span className="darkyellow">it!</span> aspire to provide
          the most immersive experience and nostalgia for some of the greatest
          animes.
        </p>
        <CtaButton text={"CLICK HERE"}/>
      </div>
    </div>
  );
};
