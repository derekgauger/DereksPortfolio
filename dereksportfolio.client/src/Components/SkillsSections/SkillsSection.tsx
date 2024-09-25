import React from 'react';
import { Skill, SkillCategory } from '../../Types/types';
import IndividualSkill from './IndividualSkill';

interface SkillsSectionProps {
    description: string;
    category: SkillCategory;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ description, category }) => {
    return (
        <div key={category.name} className='mt-8 sm:mt-10 md:mt-12'>
            <div className='text-lg sm:text-xl md:text-2xl font-semibold'>
                {category.name}
                <div className='w-[30px] sm:w-[40px] md:w-[50px] h-[2px] bg-green-400 mt-1'></div>
            </div>
            <div className='text-xs sm:text-sm text-gray-500 mt-2'>{description}</div>
            <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6'>
                {category.skills
                    .sort((a: Skill, b: Skill) => b.years - a.years)
                    .map((skill: Skill) => (
                        <IndividualSkill key={skill.name} skill={skill} />
                    ))}
            </div>
        </div>
    );
};

export default SkillsSection;