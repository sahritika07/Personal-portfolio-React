import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = ({data,data1}) => {
  console.log(data,data1)
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>Completed graduation from Ranchi University - Percentage: 86%</p>
              <p>Completed intermediate from Bridgeford School - Percentage: 76%</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Extra Curricular</h3>
              <p>Tutor at Kailasha Live Learning - Gives scratch and python programming classes to United State Students.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>Strengths</h3>
              <li>Excellent Communication</li>
              <li>Persverance</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
