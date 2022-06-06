import React from "react";
import { useToggle } from "../../../hooks/useToogle";
import styles from "./Navbar.module.css";
import { MdLeaderboard, MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { useTheme } from "../../../context/ThemeContext";

export const Navbar = () => {
  const { isToggle, toggleIt } = useToggle();
  const { setTheme } = useTheme();
  return (
    <nav className="space-around">
      <h2>
        kwizz<span className="darkyellow-color">it!</span>
      </h2>
      <ul className={styles.icons}>
        <li>
          <MdLeaderboard className={styles.icon} />
        </li>
        <li>
          {isToggle ? (
            <MdDarkMode
              className={styles.icon}
              onClick={() => {
                toggleIt();
                setTheme("light");
              }}
            />
          ) : (
            <MdOutlineWbSunny
              className={styles.icon}
              onClick={() => {
                toggleIt();
                setTheme("dark");
              }}
            />
          )}
        </li>
        <li>
          <AiOutlineLogin className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
};
