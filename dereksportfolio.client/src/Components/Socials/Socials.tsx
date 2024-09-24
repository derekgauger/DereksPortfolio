import React from 'react';
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

interface SocialsProps {
    hoverColor?: string;
    iconColor?: string;
    textColor?: string;
    alignment? : 'left' | 'center' | 'right';
}

const Socials: React.FC<SocialsProps> = ({ hoverColor, iconColor, textColor, alignment }) => {

    type Social = {
        label: string;
        icon: JSX.Element;
        link: string;
    }

    const socials: Social[] = [
        {label: "GitHub", icon: <FaGithub/>, link: 'https://www.github.com/derekgauger'},
        {label: "LinkedIn", icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/derekgauger'},
        {label: "gaugerderek@gmail.com", icon: <FaEnvelope/>, link: 'mailto:gaugerderek@gmail.com'},
        {label: "(262) 581-7793", icon: <FaPhone/>, link: ''},
        {label: "dirkyg", icon: <FaDiscord/>, link: ''},
    ]

    const alignmentClass = alignment === 'left' ? 'justify-start' : alignment === 'right' ? 'justify-end' : 'justify-center';
    const iconColorClass = iconColor ? iconColor : 'bg-green-400';
    const hoverColorClass = hoverColor ? `hover:${hoverColor} transition duration-300` : 'hover:bg-green-500 transition duration-300';
    const textColorClass = textColor ? textColor : 'text-[--primary-background-color]';
    
    return (
        <div className={`flex gap-2 m-auto mt-8 ${alignmentClass}`}>
            <div className={`flex items-center space-x-4`}>
                {socials.map((social: Social, index: number) => (
                    <a 
                        key={index} 
                        href={social.link === '' ? undefined : social.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`text-[--primary-background-color] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer tooltip ${iconColorClass} ${hoverColorClass} ${textColorClass}`} 
                        data-tooltip={social.label}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;