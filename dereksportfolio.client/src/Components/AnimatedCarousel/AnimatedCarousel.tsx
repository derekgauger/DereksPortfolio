import React from 'react';
import { Skill } from '../../Types/types';
import './AnimatedCarousel.css';

interface AnimatedCarouselProps {
  skills: Skill[];
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({ skills }) => {
  const allSkills = [...skills, ...skills];

  return (
    <div className="w-full">
      <div className='text-center text-[#636363] text-lg sm:text-xl md:text-2xl mb-4'>
        <span className="block sm:hidden">Tap the carousel to start it</span>
        <span className="hidden sm:block">Hover over the carousel to start it</span>
      </div>
      <div className="relative overflow-hidden pt-7 pb-4 h-[120px] sm:h-[150px] carousel-container">
        <div className='z-20 absolute -top-5 w-1/4 sm:w-[300px] h-[200px] bg-gradient-to-r from-[--primary-background-color] to-transparent'></div>
        <div className='z-20 right-0 -top-5 absolute w-1/4 sm:w-[300px] h-[200px] bg-gradient-to-l from-[--primary-background-color] to-transparent'></div>
        <div className="absolute whitespace-nowrap animate-carousel">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="inline-flex items-center justify-center p-2 sm:p-4 border rounded-lg m-1 sm:m-2 shadow-md relative"
              style={{ width: '150px', minWidth: '150px', maxWidth: '200px' }}
            >
              <div className='absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[75px] sm:h-[75px] rounded-full bg-[--primary-background-color] flex justify-center items-center'>
                {skill.icon && <skill.icon className="text-2xl sm:text-4xl text-green-400" />}
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="font-bold text-sm sm:text-base">{skill.name}</h3>
                <p className='text-gray-500 text-xs sm:text-sm'>
                  {skill.years === 1 ? `${skill.years} year` : `${skill.years} years`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCarousel;