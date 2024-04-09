import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <p className={styles["header-name"]}>Varun Sharma</p>
      <button className={styles["btn__resume"]}>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1mBJn48KSnLzkaRbGTyxPKwRwoqNQY-tu/view?usp=sharing"
        >
          Resume
        </a>
      </button>
    </div>
  );
}

export default Header;
