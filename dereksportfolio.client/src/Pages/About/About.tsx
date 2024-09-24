import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Profile from '../../Components/Profile/Profile';
import Skills from '../../Components/Skills/Skills';
import Footer from '../../Components/Footer/Footer';
import Interests from '../../Components/Interests/Interests';
import { fetchProfile } from '../../Functions/profileDatabase';
import { ProfileType, Skill } from '../../Types/types';
import { fetchSkills } from '../../Functions/skillsDatabase';

const About: React.FC = () => {
    const [profileData, setProfileData] = useState<ProfileType>();
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const profile = await fetchProfile();
                setProfileData(profile);
                const skillsData = await fetchSkills()
                setSkills(skillsData);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        }
        fetchProfileData();
    }, []);

    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='About' 
                description='Welcome to my about page! Here you can learn more about my background, skills, and interests. Feel free to reach out to me if you have any questions!'
            />
            <div className='pt-16 pb-16'>
                {profileData && <Profile {...profileData} />}
            </div>
            <div className='mt-8'>
                <Skills skills={skills}/>
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