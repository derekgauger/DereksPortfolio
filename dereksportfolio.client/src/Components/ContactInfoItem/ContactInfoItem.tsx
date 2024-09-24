import React, { ReactNode } from 'react';

interface ContactInfoItemProps {
    label: string;
    value: string;
    icon: ReactNode;

}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ label, value, icon }) => {
    return (
        <div className="flex flex-1 py-8">
          <div className="flex bg-green-400 rounded-full w-[65px] h-[65px] text-[--primary-background-color] text-4xl font-extralight justify-center items-center">
            {icon}
          </div>
          <div className="justify-center items-center self-center justify-self-center pl-5">
            <div className="text-2xl font-bold">{label}</div>
            <div className="text-md">{value}</div>
          </div>
        </div>
    );
};

export default ContactInfoItem;