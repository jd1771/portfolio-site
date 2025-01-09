import React from 'react';
import {FaBriefcase} from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
      title: "Software Developer Intern",
      company: "STN Video",
      period: "Sept 2023 - Apr 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis libero sit amet enim fringilla scelerisque"
  },
  {
      title: "Programmer Analyst Intern",
      company: "BC Public Service",
      period: "Jan 2023 - Apr 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis libero sit amet enim fringilla scelerisque"
  },
  {
      title: "Programmer Analyst Intern",
      company: "BC Public Service",
      period: "May 2022 - Aug 2022",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis libero sit amet enim fringilla scelerisque"
  }
]


const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        <div className="timeline">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <FaBriefcase /> 
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
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