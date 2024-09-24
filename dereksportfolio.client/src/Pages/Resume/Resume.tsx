import React, { useEffect, useState } from 'react';
import { ExperienceGroupType } from '../../Types/types';
import ExperienceGroup from '../../Components/ExperienceGroup/ExperienceGroup';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Footer from '../../Components/Footer/Footer';
import { fetchEducationData } from '../../Functions/educationDatabase';
import { fetchWorkExperienceData } from '../../Functions/workExperienceDatabase';

const Resume: React.FC = () => {

    const [education, setEducation] = useState<ExperienceGroupType>();
    const [workExperience, setWorkExperience] = useState<ExperienceGroupType>();

    useEffect(() => {
        const getEducationData = async () => {
            try {
                const educationData = await fetchEducationData();
                const workExperienceData = await fetchWorkExperienceData();
                setEducation(educationData);
                setWorkExperience(workExperienceData);
            } catch (error) {
                console.error('Error fetching education data:', error);
            }
        };
        getEducationData();
    }, []);

    const summary : ExperienceGroupType = {
        title: 'Summary',
        sections: [
            {
                title: "Derek Gauger Profile",
                description: "Professional software engineer with skills in both web development and embedded systems. Experienced in application development, verification, automation, and code maintenance. Actively working on personal projects to enhance my skills. Worked on many teams using Agile Methodologies with various tech stacks and environments. Proven record of continuous improvement and reliability.",
            },
        ]
    }

    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='Experiences' 
                description='Welcome to my experiences page! Here you can learn more about my education and professional experience.'
            />
            <div className='flex flex-col flex-wrap md:flex-row'>
                <div className='flex flex-col flex-1'>
                    <ExperienceGroup experienceGroup={summary}/>
                    {education && <ExperienceGroup experienceGroup={education}/>}
                </div>
                <div className='flex-1'>
                    {workExperience && <ExperienceGroup experienceGroup={workExperience}/>}
                </div>
            </div>
            <Footer 
                title={'Thank you for checking out my experiences section!'} 
                content={
                    <p>If you haven't, go check out my about page to learn more about me and my interests!</p>
                }
            />
        </div>
    );
};

export default Resume;