import React from 'react';
import { Skill, SkillCategory } from '../../Types/types';
import IndividualSkill from './IndividualSkill';

interface SkillsSectionProps {
    description: string;
    category: SkillCategory;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ description, category }) => {
    return (
        <div key={category.name} className='mt-5'>
            <div className='text-xl'>
                {category.name}
                <div className='w-[50px] h-[2px] bg-green-400'></div>
            </div>
            <div className='text-sm text-gray-500'>{description}</div>
            <div className='flex flex-wrap gap-4 mt-2'>
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