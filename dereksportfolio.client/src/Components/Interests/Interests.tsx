import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Interest } from '../../Types/types';
import { FaMusic, FaBook, FaCode, FaGamepad, FaPlane, FaFilm } from 'react-icons/fa';
import { SiUnrealengine } from "react-icons/si";
import { GiDiscGolfBasket } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";

const Interests: React.FC = () => {
    const interests: Interest[] = [
        { name: 'Music', icon: FaMusic },
        { name: 'Reading', icon: FaBook },
        { name: 'Coding', icon: FaCode },
        { name: 'Unreal Engine', icon: SiUnrealengine },
        { name: 'Disc Golf', icon: GiDiscGolfBasket },
        { name: 'Gaming', icon: FaGamepad },
        { name: 'Traveling', icon: FaPlane },
        { name: 'Tutoring', icon: GiTeacher },
        { name: 'Movies', icon: FaFilm },
        { name: 'Mexican Food', icon: GiTacos },
    ];

    return (
        <div className="container mx-auto">
            <SectionHeading 
                title={'My Interests'} 
                description={"These are some of the things I enjoy doing in my free time. I've recently taking up game development and I'm actively learning Unreal Engine 5."} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                {interests.map((interest: Interest) => (
                    <div 
                        key={interest.name} 
                        className="flex flex-col sm:flex-row items-center justify-center p-2 sm:p-4 border rounded-sm hover:border-green-400 hover:text-green-400 transition-all duration-200"
                    >
                        <interest.icon className="text-xl sm:text-2xl mb-1 sm:mb-0 sm:mr-2 text-green-400" />
                        <span className="text-sm sm:text-base text-center sm:text-left">{interest.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;