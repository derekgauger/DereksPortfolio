import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import ProjectDisplay from '../../Components/ProjectDisplay/ProjectDisplay';
import Footer from '../../Components/Footer/Footer';
import { Project } from '../../Types/types';
import { fetchProjects } from '../../Functions/projectsDatabase';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const Projects: React.FC = () => {
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
        <div className='container mx-auto'>
            <PageHeader 
                title='Projects' 
                description='Welcome to my projects page! Here you can learn more about what I have worked on and am currently working on in my free time. If you have any further questions please contact me.'
            />
            <ProjectDisplay projects={projects} filteredProjects={filteredProjects} setFilteredProjects={setFilteredProjects}/>
            <Footer 
                title={'Thank you for checking out my projects section!'} 
                content={
                    <p className="text-sm sm:text-base">I am always in the process of doing a project. Currently, I am working on building more website to put in the showcase and learning Unreal Engine 5.</p>
                }
            />
        </div>
    );
};

export default Projects;