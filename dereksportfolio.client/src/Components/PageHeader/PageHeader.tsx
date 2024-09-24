import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Divider from '../Divider/Divider';

interface SectionHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <>
            <div className="mt-48 w-full text-center">
                <div className='text-5xl font-bold text-green-400'>{title}</div>
                <div className='text-md mt-4 max-w-[50%] text-wrap mx-auto'>{description}</div>
            </div>
            <Divider style={{ width: "65%" }}  tailwind='mx-auto my-8 mb-14 border-t-2 border-gray-600'/>
            <div className='bg-[--secondary-background-color] h-[72px] left-0 w-full absolute'/>
            <div className='relative py-4'>
                <Breadcrumbs/>
            </div>
        </>
    );
};

export default PageHeader;