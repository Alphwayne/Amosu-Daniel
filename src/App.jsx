import { useState, useEffect } from "react";
import Hero from "./components/hero";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";
import styles from './styles/ProjectCard.module.css';

function App() {
  const [vaultUnlocked, setVaultUnlocked] = useState(false);
  
  // Check sessionStorage on mount
  useEffect(() => {
    const wasUnlocked = sessionStorage.getItem("vaultUnlocked");
    if (wasUnlocked === "true") {
      setVaultUnlocked(true);
    }
  }, []);

  // Filter projects:
  // - Show ALL Advanced projects always
  // - Show Beginner (vaulted) projects ONLY if vault is unlocked
  const visibleProjects = projects.filter(project => {
    if (project.category === "Advanced") return true;
    if (project.isVaulted && vaultUnlocked) return true;
    return false;
  });

  return (
    <>
      <Hero onVaultUnlock={setVaultUnlocked} />
      
      <div style={{ padding: "2rem", textAlign: "center" }}>
        {/* Show vault status indicator */}
        {vaultUnlocked && (
          <div style={{ 
            background: "#00ffaa20", 
            color: "#00ffaa", 
            padding: "8px 16px", 
            borderRadius: "25px",
            display: "inline-block",
            marginBottom: "1.5rem",
            fontSize: "0.85rem",
            border: "1px solid #00ffaa"
          }}>
            🔓 Vault Unlocked — Beginner Projects Visible
          </div>
        )}
        
        <div className={styles.grid}>
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;