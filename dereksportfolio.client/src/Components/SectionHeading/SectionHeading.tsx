import React from 'react';

interface SectionHeadingProps {
    title: string;
    description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, description }) => {
    return (
        <>
            <div className={`flex items-center text-3xl`}>
                {title}
                <div className='ml-2 w-[100px] h-[2px] bg-green-400'></div>
            </div>
            <div className='text-left mb-6 mt-1 max-w-[50%]'>
                {description}
            </div>
        </>
    );
};

export default SectionHeading;