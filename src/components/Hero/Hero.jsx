import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ritika Sah</h1>
        <p className={styles.description}>
           Motivated and detail-oriented fresher with expertise in MERN stack development with a strong foundation in HTML, CSS, and JavaScript. Experienced in creating interactive interfaces and managing back-end operations using Node.js and MongoDB. 
        </p>
        <a href="mailto:ritikasah731@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
