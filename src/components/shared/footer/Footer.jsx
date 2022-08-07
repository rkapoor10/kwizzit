import React from "react";
import styles from "./Footer.module.css";
import {BsTwitter, BsGithub, BsLinkedin} from "react-icons/bs"

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="fs-1r fw-semibold">
        Made with 
        <span className="baseblue">
          <a href="https://swift-uiv1.netlify.app/"> SWIFT-UI </a>
        </span>
        by RK
      </div>
      <ul className="flex-icons">
        <li >
          <a className="link-no-style" target="_blank" href="https://github.com/rkapoor10/quiz-app">
            <BsGithub className={styles.icons}/>
          </a>
        </li>
        <li >
          <a className="link-no-style" target="_blank" href="https://twitter.com/">
            <BsTwitter className={styles.icons}/>
          </a>
        </li>
        <li >
          <a className="link-no-style" target="_blank" href="https://www.linkedin.com/in/">
            <BsLinkedin className={styles.icons}/>
          </a>
        </li>
      </ul>
      <div className="gray">© 2022 SWIFT-UI</div>
    </footer>
  );
};
