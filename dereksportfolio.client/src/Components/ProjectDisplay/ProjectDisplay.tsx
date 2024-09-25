import React, { useState, useEffect } from 'react';
import { Project } from '../../Types/types';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import { AnimatePresence } from 'framer-motion';
import { fetchProjects } from '../../Functions/projectsDatabase';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

const ProjectDisplay: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const loadProjects = async () => {
        try {
          setIsLoading(true);
          const fetchedProjects = await fetchProjects();
          setProjects(fetchedProjects);
          setFilteredProjects(fetchedProjects);
        } catch (error) {
          console.error('Error fetching projects:', error);
        } finally {
          setIsLoading(false);
        }
      };

      loadProjects();
    }, []);

    if (isLoading) {
        return <LoadingIcon/>;
    }

    return (
        <div className="container px-4 mx-auto bg-[#0f0f0f] text-gray-200">
            <ProjectFilters projects={projects} setFilteredProjects={setFilteredProjects} />

            <div className='my-4 mx-auto w-full text-center'>
                <h2 className='text-xl sm:text-2xl font-bold text-[#636363]'>Hover to view project information</h2>
            </div>
            <AnimatePresence mode='wait'>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 p-4 rounded-md bg-[--secondary-background-color] mt-4"
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <div
                            className="col-span-full flex justify-center items-center text-gray-500 text-2xl sm:text-4xl font-semibold h-64"
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