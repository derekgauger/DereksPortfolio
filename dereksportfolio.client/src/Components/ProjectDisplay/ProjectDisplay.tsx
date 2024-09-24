import React, { useState, useEffect } from 'react';
import { Project } from '../../Types/types';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { AnimatePresence } from 'framer-motion';
import { fetchProjects } from '../../Functions/projectsDatabase';




const ProjectDisplay: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

    useEffect(() => {
      const loadProjects = async () => {
        try {
          const fetchedProjects = await fetchProjects();
          setProjects(fetchedProjects);
          setFilteredProjects(fetchedProjects);
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      };

      loadProjects();
    }, []);

  return (
        <div className="container mx-auto bg-[#0f0f0f] text-gray-200 ">
            <ProjectFilters projects={projects} setFilteredProjects={setFilteredProjects} />

            <div className='my-4 mx-auto w-full text-center'>
                <h2 className='text-2xl font-bold text-[#636363]'>Hover to view project information</h2>
            </div>
            <AnimatePresence mode='wait'>

                <div
                    className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 p-4 rounded-md min-w-[450px] bg-[--secondary-background-color] mt-4"
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <div
                            className="col-span-full flex justify-center items-center text-gray-500 text-4xl font-semibold h-[325px]"
                        >
                            No projects available.
                        </div>
                    )}
                </div>
            </AnimatePresence>
        </div>
    );
};

export default ProjectDisplay;