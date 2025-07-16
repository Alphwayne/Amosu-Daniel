// src/App.jsx
import { useState } from "react";
import Hero from "./components/hero";
import ProjectCard from "./components/projectcard";
import { projects } from "./data/projects";
import styles from './styles/projectcard.module.css';


function App() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Hero />

      <div style={{ padding: "2rem", textAlign: "center" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          {["All", "Beginner", "Advanced"].map((cat) => (
            <button
              key={cat}
              style={{
                padding: "10px 20px",
                margin: "0 10px",
                borderRadius: "25px",
                background: activeCategory === cat ? "#00ffaa" : "#222",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
