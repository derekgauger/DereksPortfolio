import React from 'react';

interface SectionHeadingProps {
    title: string;
    description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
    return (
        <div className="mb-6 sm:mb-8 md:mb-10">
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                {title}
                <div className="ml-2 w-[50px] sm:w-[75px] md:w-[100px] h-[2px] bg-green-400"></div>
            </div>
            <div className="text-left text-sm sm:text-base md:text-lg max-w-full sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%]">
                {description}
            </div>
        </div>
    );
};

export default SectionHeading;