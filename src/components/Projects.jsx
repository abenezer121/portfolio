import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div id="projects" className=" px-4 mt-[15vh]">
      <div className="text-center  mb-[10vh]">
        <p className="font-fixedsys text-6xl text-black text-4xl font-semibold">Projects</p>
      </div>

      {/* Updated Grid Container */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            description={proj.description}
            skills={proj.skills}
            links={proj.links}
            image={proj.image}
            images={proj.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;