import React from 'react';
import { ExperienceSection } from '../../Types/types';
import './ExperienceGroup.css'

interface ExperienceComponentProps {
    sections: ExperienceSection[];
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({ sections }) => {
  return (
    <div className=''>
        {sections.map((section : ExperienceSection, index : number) => (
            <div key={index} className='px-4 ml-2 border-l-2 border-green-400 pb-4 w-full'>
                <div className='flex'>
                    <div className='relative bg-[--primary-background-color] h-[16px] w-[16px] rounded-full outline outline-2 outline-green-400 -left-[25px] top-[2px]'/>
                    <div className='text-xl font-semibold text-green-400 leading-change'>{section.title}</div>
                </div>
                <div className='px-4'>
                    <div className='text-md italic '>{section?.date_range}</div>
                    <div className='text-lg text-gray-400'>{section?.location}</div>
                    <div className='mt-2'>{section.description}</div>
                    {section?.bulletPoints?.map((bulletPoint : string, index : number) => (
                        <ul key={index} className='list-disc list-inside'>
                            <li className='list-disc pl-5'>{bulletPoint}</li>
                        </ul>
                    ))}
                </div>
            </div>
        ))}
    </div>
  );
};

export default ExperienceComponent;