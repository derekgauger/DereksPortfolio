import React, { useState, useEffect } from 'react';
import PhysicsSimulation from '../../Components/PhysicsSimulation/PhysicsSimulation';
import TypingEffect from '../../Components/TypingEffect/TypingEffect';
import Footer from '../../Components/Footer/Footer';
import Socials from '../../Components/Socials/Socials';

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div
                className={`transition-opacity duration-1000 ease-in-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className='absolute left-[10%] top-1/3 bg-black bg-opacity-50 p-6 rounded-md'>
                    <div className='text-6xl font-bold'>Derek Gauger</div>
                    <TypingEffect prefix={"I'm"} wordList={["a Developer!", "an Engineer!", "a Designer!", "an Architect!"]}/>
                    <Socials alignment={'left'} hoverColor='bg-green-500' iconColor='bg-[#292929]' textColor='text-white'/>
                </div>
            </div>
            <PhysicsSimulation/>
            <Footer 
                title={'Welcome to my Portfolio!'} 
                content={(
                    <p>
                        "Unfortunately, you can't throw the shapes you found from above in any other section (they can be grabbed). <br/> But feel free to explore the rest of the site!"
                    </p>
                )}
            />
        </div>
    );
};

export default Home;