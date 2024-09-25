import React from 'react';
import { ExperienceGroupType, ExperienceSection } from '../../Types/types';
import ExperienceComponent from './ExperienceComponent';

interface ExperienceGroupProps {
    experienceGroup: ExperienceGroupType;
}

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({ experienceGroup }) => {
    return (
        <div className="mb-4">
            <h1 className='text-xl sm:text-2xl font-bold mb-2 mt-4'>{experienceGroup.title}</h1>
            {experienceGroup.sections.map((section: ExperienceSection, index: number) => (
                <ExperienceComponent key={index} sections={[section]}/>
            ))}
        </div>
    );
};

export default ExperienceGroup;