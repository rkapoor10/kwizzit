import { Logo } from "../../components/logo/Logo";
import { CtaButton } from "../../components/shared/button/CtaButton";
// import styles from "../questionPage/QuestionPage.module.css";
import styles from "./Scorecard.module.css";

export const Scorecard = () => {
  return (
    <div className={`flex-column-center `}>
      <Logo />
      <div
        className={`question-box flex-column-center center ${styles.container}`}
      >
        <h2>Category - Score Card</h2>

        <p className="m-2 txt-l ">
          Final Score:<span className="darkyellow"> 10</span>
        </p>

        <div className={styles.scorecardAnswers}>
          <div className={`m-2`}>
            <div className="txt-m">What is the real name of Tobi?</div>
            <ul className={`column-flex m-2 ${styles.options}`}>
              <li className={styles.option}>Madara</li>
              <li className={`${styles.correctAns} ${styles.option}`}>Obito</li>
              <li className={styles.option}>Hashirama</li>
              <li className={styles.option}>Kaguya</li>
            </ul>
          </div>

          <div className={`m-2`}>
            <div className="txt-m">What is the real name of Tobi?</div>
            <ul className={`column-flex m-2 ${styles.options}`}>
              <li className={styles.option}>Madara</li>
              <li className={`${styles.correctAns} ${styles.option}`}>Obito</li>
              <li className={styles.option}>Hashirama</li>
              <li className={`${styles.wrongAns} ${styles.option}`}>Kaguya</li>
            </ul>
          </div>
          <div className={`m-2`}>
            <div className="txt-m">What is the real name of Tobi?</div>
            <ul className={`column-flex m-2 ${styles.options}`}>
              <li className={styles.option}>Madara</li>
              <li className={styles.option}>Obito</li>
              <li className={styles.option}>Hashirama</li>
              <li className={styles.option}>Kaguya</li>
            </ul>
          </div>
        </div>
      </div>
      <CtaButton text={"Play Again"}/>
    </div>
  );
};
