import React from 'react';
import {FaGithub, FaGlobe} from "react-icons/fa";
import './Projects.css';

const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Next.js",
        githubUrl: "https://github.com/",
        liveUrl: "https://www.abc.com"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Next.js",
        githubUrl: "https://github.com/",
        liveUrl: "https://www.abc.com"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Next.js",
        githubUrl: "https://github.com/",
        liveUrl: "https://www.abc.com"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "A responsive portfolio website built with React and Next.js",
        githubUrl: "https://github.com/",
    }
]

const ProjectTile = ({ title, description, githubUrl, liveUrl }) => {
    return (
      <div className="project-tile">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`GitHub repository for ${title}`}>
              <FaGithub size={24} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Live site for ${title}`}>
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
  
