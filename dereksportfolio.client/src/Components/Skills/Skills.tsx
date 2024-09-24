import React, { useEffect, useState } from 'react';
import AnimatedCarousel from '../AnimatedCarousel/AnimatedCarousel';
import { Skill } from '../../Types/types';
import SkillsSections from '../SkillsSections/SkillsSections';
import ExpandButton from './ExpandButton';
import SectionHeading from '../SectionHeading/SectionHeading';
import { fetchSkills } from '../../Functions/skillsDatabase';

const Skills: React.FC = () => {
    const [openSections, setOpenSection] = useState<boolean>(false);
    const [contentHeight, setContentHeight] = useState<number | null>(null);
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const getAllSkills = async () => {
            try {
                const skillsData = await fetchSkills()
                setSkills(skillsData);
            } catch (error) {
                console.error('Error fetching skills data:', error);
            }
        }
        getAllSkills();
    }, [])

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



    // const skills: Skill[] = [
    //     { name: 'React', years: 3, icon: FaReact, category: 'Frontend', description: 'A JavaScript library for building user interfaces' },
    //     { name: 'JavaScript', years: 5, icon: FaJs, category: 'Frontend', description: 'A high-level, often just-in-time compiled, and multi-paradigm programming language' },
    //     { name: 'HTML', years: 7, icon: FaHtml5, category: 'Frontend', description: 'The standard markup language for documents designed to be displayed in a web browser' },
    //     { name: 'CSS', years: 6, icon: FaCss3, category: 'Frontend', description: 'A style sheet language used for describing the presentation of a document written in HTML or XML' },
    //     { name: 'Node.js', years: 4, icon: FaNode, category: 'Backend', description: 'An open-source, cross-platform, back-end JavaScript runtime environment' },
    //     { name: 'Python', years: 2, icon: FaPython, category: 'Backend', description: 'An interpreted, high-level and general-purpose programming language' },
    //     { name: 'TypeScript', years: 3, icon: FaJs, category: 'Frontend', description: 'A strict syntactical superset of JavaScript and adds optional static typing to the language' },
    //     { name: 'Redux', years: 2, icon: FaReact, category: 'Frontend', description: 'A predictable state container for JavaScript apps' },
    //     { name: 'GraphQL', years: 1, icon: FaReact, category: 'Backend', description: 'A query language for your API, and a server-side runtime for executing queries' },
    //     { name: 'MongoDB', years: 3, icon: FaNode, category: 'Database', description: 'A source-available cross-platform document-oriented database program' },
    //     { name: 'Express.js', years: 4, icon: SiExpress, category: 'Backend', description: 'A minimal and flexible Node.js web application framework' },
    //     { name: 'Django', years: 2, icon: FaPython, category: 'Backend', description: 'A high-level Python web framework that encourages rapid development' },
    //     { name: 'Flask', years: 2, icon: FaPython, category: 'Backend', description: 'A micro web framework written in Python' },
    //     { name: 'Git', years: 5, icon: FaGit, category: 'Tools', description: 'A distributed version-control system for tracking changes in source code during software development' },
    //     { name: 'Docker', years: 2, icon: FaNode, category: 'DevOps', description: 'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers' },
    //     { name: 'Kubernetes', years: 1, icon: FaNode, category: 'DevOps', description: 'An open-source container-orchestration system for automating computer application deployment, scaling, and management' },
    //     { name: 'AWS', years: 2, icon: FaNode, category: 'Cloud', description: 'A subsidiary of Amazon providing on-demand cloud computing platforms and APIs' },
    //     { name: 'Azure', years: 1, icon: FaNode, category: 'Cloud', description: 'A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services' },
    //     { name: 'GCP', years: 1, icon: FaNode, category: 'Cloud', description: 'A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products' },
    //     { name: 'Jest', years: 3, icon: FaJs, category: 'Testing', description: 'A delightful JavaScript Testing Framework with a focus on simplicity' },
    //     { name: 'Mocha', years: 2, icon: FaJs, category: 'Testing', description: 'A feature-rich JavaScript test framework running on Node.js and in the browser' },
    //     { name: 'Chai', years: 2, icon: FaJs, category: 'Testing', description: 'A BDD / TDD assertion library for node and the browser' },
    //     { name: 'Sass', years: 4, icon: FaCss3, category: 'Frontend', description: 'A preprocessor scripting language that is interpreted or compiled into CSS' },
    //     { name: 'Less', years: 3, icon: FaCss3, category: 'Frontend', description: 'A backwards-compatible language extension for CSS' },
    //     { name: 'Webpack', years: 3, icon: FaJs, category: 'Tools', description: 'An open-source JavaScript module bundler' },
    // ];

    return (
        <div>
            <SectionHeading 
                title={'My Skills'} 
                description={"Here are some of the technologies I've worked with over the years. This section showcases all the technologies I've worked with throughout my education, internships, professional experience, and personal projects."}
            />
            <div className='w-full text-left'>
                <ExpandButton 
                    openTitle={"Expand Detailed Skills"} 
                    closeTitle={"Close Detailed Skills"} 
                    isExpanded={openSections} 
                    setExpanded={setOpenSection} 
                />
            </div>
            <div 
                id="skills-content"
                style={{
                    maxHeight: openSections ? `${contentHeight}px` : '0px',
                    overflow: 'hidden',
                    transition: 'max-height .5s ease-in-out'
                }}
            >
                <SkillsSections skills={skills}/>
                <div className='w-full text-left'>
                    <ExpandButton 
                        openTitle={"Expand Detailed Skills"} 
                        closeTitle={"Close Detailed Skills"} 
                        isExpanded={openSections} 
                        setExpanded={setOpenSection} 
                    />
                </div>
            </div>
            <div className='mt-4'>
                <AnimatedCarousel skills={skills} />
            </div>
        </div>
    );
};

export default Skills;