import React, { useState } from 'react';
import { Skill } from '../../Types/types';

interface IndividualSkillProps {
    skill: Skill;
}

const IndividualSkill: React.FC<IndividualSkillProps> = ({ skill }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div 
                onClick={() => setIsModalOpen(true)}
                className='p-4 border rounded-sm hover:border-green-400 hover:text-green-400 transition-all duration-200 cursor-pointer'
            >
                <div className='w-[75px] h-[75px] rounded-full bg-[--primary-background-color] flex justify-center items-center text-green-400'>
                    {skill.icon && <skill.icon className="text-4xl" />}
                </div>
                <div className="mt-6 text-center">
                    <h3 className="font-bold">{skill.name}</h3>
                    <p className='text-gray-500'>{skill.years} years</p>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setIsModalOpen(false)}>
                    <div 
                        className="absolute bg-[--primary-background-color] border hover:border-pink-600 transition-all duration-200 p-8 rounded-sm max-w-md w-full m-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">{skill.name} Involvement</h2>
                        <p className="text-gray-500 mb-4">{skill.description}</p>
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default IndividualSkill;