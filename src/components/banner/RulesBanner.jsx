import { CtaButton } from "../shared/button/CtaButton";
import styles from "./Banner.module.css";

export const RulesBanner = () => {
  return (
    <div className={`flex-column-center ${styles.banner}`}>
      <img className={styles.hero} src="/assets/bulb.svg" alt="logo" />
      <h1>
        kwizz<span className="darkyellow">it!</span>
      </h1>
      <div className={`flex-column-center center ${styles.container}`}>
        <h2 class="darkyellow">#RULES</h2>
        <p class="txt-s gray">Before starting the quiz read the rules 😎</p>
        <ul class="txt-s">
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> This is a quiz on Animes so
            do watch it or you can try you luck!
          </li>
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> Quiz contains 5 questions
            with a single correct answer
          </li>
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> For every single
            <span class=" darkyellow"> correct answer</span> you get
            <span class="darkyellow"> +4 </span>
          </li>
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> For an
            <span class="darkyellow"> incorrect answer</span> you get
            <span class="darkyellow"> -1 </span>
          </li>
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> Once clicked the response
            cannot be modified so be careful!
          </li>
          <li class="m-1">
            <span class="darkyellow m-1">{">>"}</span> Pro Tip 💡: you will get the
            answers at the end. So give the quiz again to get full marks!
          </li>
        </ul>
        <CtaButton text={"Start Quiz"}/>
      </div>
    </div>
  );
};
