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
        <div className="relative min-h-screen">
            <div
                className={`transition-opacity duration-1000 ease-in-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className='absolute left-4 sm:left-[10%] top-[20%] sm:top-1/4 bg-black bg-opacity-50 p-4 sm:p-6 rounded-md max-w-[90%] sm:max-w-none'>
                    <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold min-w-full'>Derek Gauger</div>
                    <div className='mt-2 text-base sm:text-lg md:text-xl'>
                        <TypingEffect prefix={"I'm"} wordList={["a Developer!", "an Engineer!", "a Designer!", "an Architect!"]}/>
                    </div>
                    <div className="mt-4">
                        <Socials alignment={'left'} hoverColor='bg-green-500' iconColor='bg-[#292929]' textColor='text-white'/>
                    </div>
                </div>
            </div>
            <PhysicsSimulation/>
            <Footer 
                title={'Welcome to my Portfolio!'} 
                content={(
                    <p className="text-sm sm:text-base">
                        Unfortunately, you can't throw the shapes you found from above in any other section (they can be grabbed). <br className="hidden sm:inline"/> But feel free to explore the rest of the site!
                    </p>
                )}
            />
        </div>
    );
};

export default Home;