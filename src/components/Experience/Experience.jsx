import React from 'react';
import {FaBriefcase} from 'react-icons/fa';
import { experienceData } from '../../data/experienceData';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="experience-title">My Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase /> 
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.company}
                  </a>
                </h4>
                <p className="period">{item.period}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;