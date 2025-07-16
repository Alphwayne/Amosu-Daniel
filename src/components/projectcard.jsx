// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import styles from '../styles/projectcard.module.css';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <img src={project.image} alt={project.title} className={styles.preview} />
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Tools:</strong> {project.tools.join(', ')}</p>
        <pre><code>{project.codeSnippet}</code></pre>
        <a href={project.liveLink} target="_blank" rel="noreferrer">🔗 View Live</a>
      </div>
    </motion.div>
  );
}
