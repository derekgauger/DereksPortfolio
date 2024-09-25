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
                className='p-2 sm:p-3 md:p-4 border rounded-sm hover:border-green-400 hover:text-green-400 transition-all duration-200 cursor-pointer'
            >
                <div className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] rounded-full bg-[--primary-background-color] flex justify-center items-center text-green-400'>
                    {skill.icon && <skill.icon className="text-2xl sm:text-3xl md:text-4xl" />}
                </div>
                <div className="mt-2 sm:mt-4 md:mt-6 text-center">
                    <h3 className="font-bold text-xs sm:text-sm md:text-base">{skill.name}</h3>
                    <p className='text-gray-500 text-xs sm:text-sm'>{skill.years} years</p>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setIsModalOpen(false)}>
                    <div 
                        className="absolute bg-[--primary-background-color] border hover:border-pink-600 transition-all duration-200 p-4 sm:p-6 md:p-8 rounded-sm max-w-xs sm:max-w-sm md:max-w-md w-full m-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{skill.name} Involvement</h2>
                        <p className="text-gray-500 text-sm sm:text-base mb-4">{skill.description}</p>
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="bg-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-pink-700 transition-colors"
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