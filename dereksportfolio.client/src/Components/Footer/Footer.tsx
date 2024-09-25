import React from 'react';
import Socials from '../Socials/Socials';
import Divider from '../Divider/Divider';

interface FooterProps {
    title: string,
    content: JSX.Element,
}

const Footer: React.FC<FooterProps> = ({ title, content }) => {
    return (
        <footer className="px-4 sm:px-6 lg:px-8 py-8">
            <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>{title}</div>
            <div className='text-sm sm:text-base md:text-md text-center mt-4 text-wrap w-full sm:w-5/6 md:w-3/4 lg:w-2/3 mx-auto'>
                {content}
            </div>
            <div className="mt-6">
                <Socials/>
            </div>
            <Divider style={{ width: "100%", maxWidth: "800px" }} tailwind='mx-auto my-6 sm:my-8 border-t-2 border-gray-600'/>
            <div className='text-center text-xs sm:text-sm md:text-base'>
                &copy; {new Date().getFullYear()} Derek Gauger. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;