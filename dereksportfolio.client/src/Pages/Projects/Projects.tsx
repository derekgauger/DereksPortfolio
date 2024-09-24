import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import ProjectDisplay from '../../Components/ProjectDisplay/ProjectDisplay';
import Footer from '../../Components/Footer/Footer';

const Projects: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='Projects' 
                description='Welcome to my projects page! Here you can learn more about the projects I have worked on and am currently working on. Hovering over each picture will give you an option to learn more about the project.'
            />
            <ProjectDisplay/>
            <Footer 
                title={'Thank you for checking out my projects section!'} 
                content={
                    <p>I am always in the process of doing a project. Contact me if you would like to learn more or participate.</p>
                }
            />
        </div>
    );
};

export default Projects;