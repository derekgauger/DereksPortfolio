import React, { ReactNode } from 'react';

interface ContactInfoItemProps {
    label: string;
    value: string;
    icon: ReactNode;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ label, value, icon }) => {
    return (
        <div className="flex flex-1 py-4 sm:py-6 md:py-8">
          <div className="flex bg-green-400 rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px] text-[--primary-background-color] text-2xl sm:text-3xl md:text-4xl font-extralight justify-center items-center">
            {icon}
          </div>
          <div className="justify-center items-center self-center justify-self-center pl-3 sm:pl-4 md:pl-5">
            <div className="text-lg sm:text-xl md:text-2xl font-bold">{label}</div>
            <div className="text-sm sm:text-base md:text-md">{value}</div>
          </div>
        </div>
    );
};

export default ContactInfoItem;