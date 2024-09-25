import React, { useEffect, useState } from 'react';
import AnimatedCarousel from '../AnimatedCarousel/AnimatedCarousel';
import { Skill } from '../../Types/types';
import SkillsSections from '../SkillsSections/SkillsSections';
import ExpandButton from './ExpandButton';
import SectionHeading from '../SectionHeading/SectionHeading';

interface SkillsProps {
    skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
    const [openSections, setOpenSection] = useState<boolean>(false);
    const [contentHeight, setContentHeight] = useState<number | null>(null);

    useEffect(() => {
        if (openSections) {
            const content = document.getElementById('skills-content');
            if (content) {
                setContentHeight(content.scrollHeight);
            }
        } else {
            setContentHeight(0);
        }
    }, [openSections]);

    return (
        <div className="px-4">
            <SectionHeading 
                title={'My Skills'} 
                description={"Here are some of the technologies I've worked with over the years. This section showcases all the technologies I've worked with throughout my education, internships, professional experience, and personal projects."}
            />
            <div className='w-full text-left mb-4'>
                <ExpandButton 
                    openTitle={"Expand Detailed Skills"} 
                    closeTitle={"Close Detailed Skills"} 
                    isExpanded={openSections} 
                    setExpanded={setOpenSection} 
                />
            </div>
            <div 
                id="skills-content"
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                    maxHeight: openSections ? `${contentHeight}px` : '0px',
                }}
            >
                <SkillsSections skills={skills}/>
                <div className='w-full text-left mt-4'>
                    <ExpandButton 
                        openTitle={"Expand Detailed Skills"} 
                        closeTitle={"Close Detailed Skills"} 
                        isExpanded={openSections} 
                        setExpanded={setOpenSection} 
                    />
                </div>
            </div>
            <div className='mt-8 sm:mt-12'>
                <AnimatedCarousel skills={skills} />
            </div>
        </div>
    );
};

export default Skills;