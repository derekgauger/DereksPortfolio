import React, { useEffect, useState } from 'react';
import { Skill } from '../../Types/types';
import SkillsSection from './SkillsSection';

interface SkillsSectionsProps {
    skills: Skill[];
}

type Category = {
    name: string;
    skills: Skill[];
}

const SkillsSections: React.FC<SkillsSectionsProps> = ({ skills }) => {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const categories = skills.reduce((acc: Category[], skill) => {
            const existingCategory = acc.find(category => category.name === skill.category);

            if (existingCategory) {
                existingCategory.skills.push(skill);
            } else {
                acc.push({ name: skill.category, skills: [skill] });
            }

            return acc;
        }, []);

        setCategories(categories);
    }, [skills]);

    return (
        <div className='ml-[90px] pl-[90px] border-l-2 border-pink-600'>
            {categories.map(category => (
                <SkillsSection description={''} category={category}/>
            ))}
        </div>
    );
};

export default SkillsSections;