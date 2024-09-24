import React from 'react';
import Socials from '../Socials/Socials';
import Divider from '../Divider/Divider';

interface FooterProps {
    title: string,
    content: JSX.Element,
}

const Footer: React.FC<FooterProps> = ({ title, content }) => {

    return (
        <>
            <div className='mt-8 text-4xl font-bold text-center'>{title}</div>
            <div className='text-md text-center mt-4 text-wrap w-2/3 mx-auto'>
                {content}
            </div>
            <Socials/>
            <Divider style={{ width: "67%" }} tailwind='mx-auto my-8 border-t-2 border-gray-600'/>
            <div className='text-center text-md mb-8'>
                &copy; {new Date().getFullYear()} Derek Gauger. All rights reserved.
            </div>
        </>
    );
};

export default Footer;