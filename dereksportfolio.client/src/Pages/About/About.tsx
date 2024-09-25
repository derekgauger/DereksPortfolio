import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import Profile from '../../Components/Profile/Profile';
import Skills from '../../Components/Skills/Skills';
import Footer from '../../Components/Footer/Footer';
import Interests from '../../Components/Interests/Interests';
import { fetchProfile } from '../../Functions/profileDatabase';
import { ProfileType, Skill } from '../../Types/types';
import { fetchSkills } from '../../Functions/skillsDatabase';
import LoadingIcon from '../../Components/LoadingIcon/LoadingIcon';

const About: React.FC = () => {
    const [profileData, setProfileData] = useState<ProfileType>();
    const [skills, setSkills] = useState<Skill[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                const [profile, skillsData] = await Promise.all([
                    fetchProfile(),
                    fetchSkills()
                ]);
                setProfileData(profile);
                setSkills(skillsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProfileData();
    }, []);

    if (isLoading) {
        return <LoadingIcon/>;
    }

    return (
        <div className='container mx-auto'>
            <PageHeader 
                title='About' 
                description='Welcome to my about page! Here you can learn more about my background, skills, and interests. Feel free to reach out to me if you have any questions!'
            />
            <div className='px-4'>
                <div className='py-4'>
                    {profileData && <Profile {...profileData} />}
                </div>
                <div className='mt-4'>
                    <Skills skills={skills}/>
                </div>
                <div className='mt-8 sm:mt-12'>
                    <Interests/>
                </div>
                <Footer 
                    title={'Thank you for checking out my about section!'} 
                    content={
                        <p className="text-sm sm:text-base">
                            Fun fact: In the 'Detailed Skills' section you can click on one of the skills to learn more about my involvement with that technology.
                        </p>
                    }
                />
            </div>
        </div>
    );
};

export default About;