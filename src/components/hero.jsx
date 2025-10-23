// src/components/Hero.jsx
import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

const texts = [
  "Web Developer.",
  "Frontend Developer.",
  "Full-Stack Developer.",
  "Problem Solver.",
  "Digital Creative.",
  "Builder of Real-World Web Tools.",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let currentText = texts[textIndex];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(currentText.slice(0, i + 1));
      i++;
      if (i >= currentText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayed("");
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <div className={styles.hero}>
      <img src="/my-profile.jpg" className={styles.avatar} alt="Amosu Daniel" />
      
      <div className={styles.heroContent}>
        <h1>Amosu Daniel</h1>
        <p className={styles.typing}>{displayed}|</p>
        <p className={styles.bio}>
          I build unique web experiences and push pixels with purpose.<br />
          <a href="https://www.linkedin.com/in/kishyy" target="_blank" rel="noreferrer">LinkedIn</a> | 
          <a href="https://github.com/Alphwayne" target="_blank" rel="noreferrer">GitHub</a> | 
          <a href="mailto:amosudnl896@gmail.com">Contact</a>
        </p>
      </div>
    </div>
  );
}
