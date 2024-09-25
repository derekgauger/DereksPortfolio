import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Divider from '../Divider/Divider';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <header className="">
            <div className="mt-24 sm:mt-32 md:mt-40 lg:mt-48 w-full text-center px-4">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-green-400'>{title}</h1>
                <p className='text-sm sm:text-base md:text-md mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto'>
                    {description}
                </p>
            </div>
            <Divider 
                style={{ width: "90%", maxWidth: "1200px" }}  
                tailwind='mx-auto my-6 sm:my-8 md:mb-14 border-t-2 border-gray-600'
            />
            <div className='bg-[--secondary-background-color] h-[48px] sm:h-[60px] md:h-[72px] left-0 w-full absolute'/>
            <div className='relative py-2 sm:py-3 md:py-4'>
                <Breadcrumbs/>
            </div>
        </header>
    );
};

export default PageHeader;