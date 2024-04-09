import React from "react";
import styles from "./Footer.module.css";
import instaLogo from "../../assets/instagram-logo.jpeg";
import twitterLogo from "../../assets/twitter-logo.jpeg";
import linkedinLogo from "../../assets/linkedin.jpeg";
import githubLogo from "../../assets/github.jpeg";
import emailLogo from "../../assets/e-mail.jpeg";
import leetcodeLogo from "../../assets/leetcode-logo.jpeg";

function Footer() {
  return (
    <center>
      <div className={styles.footer}>
        <p align="center">Contact Me</p>
        <div className={styles["social-media-handles"]}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/varun-sharma-9728591a0/"
          >
            <img src={linkedinLogo} className={styles.logos} />
          </a>
          <a target="_blank" href="https://github.com/varunsharma21">
            <img src={githubLogo} className={styles.logos} />
          </a>
          <a target="_blank" href="https://twitter.com/Varun_Sharma21">
            <img src={twitterLogo} className={styles.logos} />
          </a>
          <a target="_blank" href="https://www.leetcode.com/varun-sharma">
            <img src={leetcodeLogo} className={styles.logos} />
          </a>
          <a target="_blank" href="mailto: varun.sharma59234@gmail.com">
            <img src={emailLogo} className={styles.logos} />
          </a>
          <a target="_blank" href="https://www.instagram.com/21varun_sharma/">
            <img src={instaLogo} className={styles.logos} />
          </a>
        </div>
      </div>
    </center>
  );
}

export default Footer;
