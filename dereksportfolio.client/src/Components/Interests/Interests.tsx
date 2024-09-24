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
        <div className="container mx-auto px-4">
            <SectionHeading 
                title={'My Interests'} 
                description={"These are some of the things I enjoy doing in my free time. I'm always looking to learn new things. Also, I am looking for people to do coding projects with, if this is you, feel free to reach out to me!"}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {interests.map((interest: Interest) => (
                    <div key={interest.name} className="flex items-center justify-center p-4 border rounded-sm hover:border-green-400 hover:text-green-400 transition-all duration-200">
                        <interest.icon className="text-2xl mr-2 text-green-400" />
                        <span className="text-lg ">{interest.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interests;