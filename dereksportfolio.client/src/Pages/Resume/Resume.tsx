import React, { useEffect, useState } from 'react';
import { ExperienceGroupType } from '../../Types/types';
import ExperienceGroup from '../../Components/ExperienceGroup/ExperienceGroup';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Footer from '../../Components/Footer/Footer';
import { fetchEducationData } from '../../Functions/educationDatabase';
import { fetchWorkExperienceData } from '../../Functions/workExperienceDatabase';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';
import { fetchSummary } from '../../Functions/summaryDatabase';

const Resume: React.FC = () => {
    const [education, setEducation] = useState<ExperienceGroupType>();
    const [workExperience, setWorkExperience] = useState<ExperienceGroupType>();
    const [summary, setSummary] = useState<ExperienceGroupType>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [educationData, workExperienceData, summaryData] = await Promise.all([
                    fetchEducationData(),
                    fetchWorkExperienceData(),
                    fetchSummary()
                ]);
                setSummary(summaryData);
                setEducation(educationData);
                setWorkExperience(workExperienceData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    
    if (isLoading) {
        return <LoadingIcon/>;
    }

    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='Experiences' 
                description='Welcome to my experiences page! Here you can learn a little bit about my background, the education I have received, and the work experience I have gained over the years.'
            />
            <div className='flex flex-col lg:flex-row px-4'>
                <div className='flex flex-col w-full lg:w-1/2 lg:pr-4'>
                    {summary && <ExperienceGroup experienceGroup={summary}/>}
                    {education && <ExperienceGroup experienceGroup={education}/>}
                </div>
                <div className='w-full lg:w-1/2 lg:pl-4'>
                    {workExperience && <ExperienceGroup experienceGroup={workExperience}/>}
                </div>
            </div>
            <Footer 
                title={'Thank you for checking out my experiences section!'} 
                content={
                    <p className="text-sm sm:text-base">If you haven't already, go check out some of my projects. Each of those have been a great experience too.</p>
                }
            />
        </div>
    );
};

export default Resume;