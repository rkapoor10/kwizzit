import { Logo } from "../../components";
import styles from "./QuestionPage.module.css";

export const QuestionPage = () => {
  return (
    <div className="flex-column-center">
      <Logo/>
      <div className={`flex-column-center center ${styles.container}`}>
        <h2>QUIZ</h2>
        <div className={`txt-m  ${styles.status}`}>
          <p>
            Question:<span className="darkyellow"> 1/5</span>
          </p>
          <p>
            Score:<span className="darkyellow"> 0</span>
          </p>
        </div>
        <div className="txt-m">What is the real name of Tobi?</div>
        <ul className={`column-flex m-2 ${styles.options}`}>
          <li className={styles.option}>Madara</li>
          <li className={styles.option}>Obito</li>
          <li className={styles.option}>Hashirama</li>
          <li className={styles.option}>Kaguya</li>
        </ul>
      </div>
      <button className={`txt-s btn-secondary ${styles.quitBtn}`}>
        Quit Quiz
      </button>
    </div>
  );
};
