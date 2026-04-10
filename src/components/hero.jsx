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

// SECRET VAULT PASSKEY
const VAULT_PASSKEY = "Alphwayne0513"; 

export default function Hero({ onVaultUnlock }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [showPasskeyModal, setShowPasskeyModal] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState("");
  const [error, setError] = useState("");

  // Triple-click detection
  const handleAvatarClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Reset after 1 second of no clicks
    setTimeout(() => {
      setClickCount(0);
    }, 1000);
    
    // Triple click detected
    if (newCount === 3) {
      setClickCount(0);
      setShowPasskeyModal(true);
      setPasskeyInput("");
      setError("");
    }
  };

  const handleUnlockVault = () => {
    if (passkeyInput === VAULT_PASSKEY) {
      // Correct passkey - unlock vault
      setShowPasskeyModal(false);
      setPasskeyInput("");
      if (onVaultUnlock) {
        onVaultUnlock(true);
      }
      // Optional: store in sessionStorage so it persists during session
      sessionStorage.setItem("vaultUnlocked", "true");
    } else {
      setError("Incorrect passkey. Access denied.");
    }
  };

  const handleCloseModal = () => {
    setShowPasskeyModal(false);
    setPasskeyInput("");
    setError("");
  };

  // Check if vault was already unlocked this session
  useEffect(() => {
    const wasUnlocked = sessionStorage.getItem("vaultUnlocked");
    if (wasUnlocked === "true" && onVaultUnlock) {
      onVaultUnlock(true);
    }
  }, [onVaultUnlock]);

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
    <>
      <div className={styles.hero}>
        <div className={styles.avatarContainer}>
          <img 
            src="/profile.png" 
            className={styles.avatar} 
            alt="Amosu Daniel" 
            onClick={handleAvatarClick}
            style={{ cursor: "pointer" }}
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

      {/* Passkey Modal */}
      {showPasskeyModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3>🔐 Developer Vault</h3>
            <p>Enter passkey to access beginner projects archive:</p>
            <input
              type="password"
              value={passkeyInput}
              onChange={(e) => setPasskeyInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUnlockVault()}
              placeholder="Enter passkey"
              autoFocus
            />
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.modalButtons}>
              <button onClick={handleUnlockVault}>Unlock</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}