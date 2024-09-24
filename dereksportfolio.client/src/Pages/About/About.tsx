import React from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Profile from '../../Components/Profile/Profile';
import Skills from '../../Components/Skills/Skills';
import Footer from '../../Components/Footer/Footer';
import Interests from '../../Components/Interests/Interests';

const About: React.FC = () => {


    

    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='About' 
                description='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            />
            <div className='pt-16 pb-16'>
                <Profile {...profileData} />
            </div>
            <div className='mt-8'>
                <Skills/>
            </div>
            <div className='mt-16'>
                <Interests/>
            </div>
            <Footer 
                title={'Thank you for checking out my about section!'} 
                content={
                    <p>Fun fact: In the 'Detailed Skills' section you can click on of the skills to learn more about my involvement with that technology.</p>
                }
            />
        </div>
    );
};

export default About;