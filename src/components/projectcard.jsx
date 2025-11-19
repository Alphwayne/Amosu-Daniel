// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import styles from '../styles/ProjectCard.module.css';

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
      {/* Handle both single image and multiple images */}
      {Array.isArray(project.image) && project.image.length > 1 ? (
        <div className={styles.imageGallery}>
          {project.image.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`${project.title} ${index === 0 ? 'Figma Design' : 'Final Result'}`} 
              className={styles.preview}
            />
          ))}
        </div>
      ) : (
        <div className={styles.imageWrapper}>
          <img 
            src={Array.isArray(project.image) ? project.image[0] : project.image} 
            alt={project.title} 
            className={styles.preview} 
          />
        </div>
      )}
      
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p><strong>Tools:</strong> {project.tools.join(', ')}</p>
        <pre><code>{project.codeSnippet}</code></pre>
        <a href={project.liveLink} target="_blank" rel="noreferrer">🔗 View Live</a>
      </div>
    </motion.div>
  );
}