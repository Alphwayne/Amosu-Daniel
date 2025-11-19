import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";

const texts = [
  "Web Developer.",
  "Frontend Developer.", 
  "Full-Stack Developer.",
  "Problem Solver.",
  "Digital Craftsman.",
  "Builder of Real-World Solutions.",
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
      <div className={styles.avatarContainer}>
        <img 
          src="/profile.png" 
          className={styles.avatar} 
          alt="Amosu Daniel" 
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%2300ffaa' opacity='0.1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='32' fill='%2300ffaa'%3EAD%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className={styles.avatarGlow}></div>
      </div>
      
      <div className={styles.heroContent}>
        <h1>Amosu Daniel</h1>
        <p className={styles.typing}>{displayed}|</p>
        
        <p className={styles.bio}>
          I transform complex challenges into elegant digital solutions. With a passion for 
          clean code and user-centric design, I bridge the gap between ideas and functional reality.
        </p>
        
        <p className={styles.story}>
          My journey began with curiosity and evolved into a craft. From building payment systems 
          that handle real transactions to creating pixel-perfect implementations of complex designs, 
          I thrive on turning abstract concepts into tangible digital experiences that make a difference.
        </p>

        <p className={styles.passion}>
          I believe in building with purpose ,
          every design decision enhances usability, and every project leaves a positive impact.
        </p>
        
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/kishyy" target="_blank" rel="noreferrer" className={styles.link}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/Alphwayne" target="_blank" rel="noreferrer" className={styles.link}>
            💻 GitHub
          </a>
          <a href="mailto:amosudnl896@gmail.com" className={styles.link}>
            📧 Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}