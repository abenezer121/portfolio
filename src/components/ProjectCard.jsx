import React from 'react';
import ProjectLinks from './ProjectLinks';

const ProjectCard = ({ image, title, description, skills, links, images }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 h-60 md:h-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="font-fixedsys  text-4xl font-semibold text-gray-800 mb-4">{title}</h3>
          <p className="font-mono text-gray-600 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap mb-4">
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full mr-2 mb-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <ProjectLinks links={{ ...links, images }} />
      </div>
    </div>
  );
};

export default ProjectCard;
