import React from 'react';
import {FaGithub, FaGlobe} from "react-icons/fa";
import { projectData } from '../../data/projectData';
import './Projects.css';

const ProjectTile = ({ title, description, githubUrl, liveUrl }) => {
  return (
    <div className="project-tile">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-links">
        {githubUrl && (
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link" 
            title="View GitHub Repository"
            aria-label={`GitHub repository for ${title}`}
          >
            <FaGithub size={24} />
          </a>
        )}
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link"
            title="View Live Site"
            aria-label={`Live site for ${title}`}
          >
            <FaGlobe size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectTile key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
  
