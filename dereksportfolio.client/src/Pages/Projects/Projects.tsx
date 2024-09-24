import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import ProjectDisplay from '../../Components/ProjectDisplay/ProjectDisplay';
import Footer from '../../Components/Footer/Footer';

const Projects: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='Projects' 
                description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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