import React from "react";
import styles from "./CategoryCard.module.css"

export const CategoryCard = ({title, image, questionCount}) => {
    return(
        <div className={`card-container ${styles.category}`} key={title}>
              <a href="/rules/rules.html">
                <img src={image} alt="quiz-image" />
              </a>
              <div>
                <h4 className="darkyellow">{title}</h4>
                <p className="txt-xs gray">questions - {questionCount}</p>
              </div>
        </div>
    )
}