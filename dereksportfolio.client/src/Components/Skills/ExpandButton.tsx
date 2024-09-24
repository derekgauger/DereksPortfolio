import React from 'react';

interface ExpandButtonProps {
    openTitle: string;
    closeTitle: string;
    isExpanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ openTitle, closeTitle, isExpanded, setExpanded }) => {

    return (
        <div>
            {isExpanded ? (
                <button
                    className='w-[180px] mx-auto p-2 border font-semibold border-pink-600 bg-pink-600 rounded-lg text-[--primary-background-color] hover:bg-pink-700 hover:text-[--primary-background-color]'
                    onClick={() => setExpanded(!isExpanded)}>
                    {closeTitle}
                </button>
            ) : (
                <button
                    className='w-[180px] mx-auto p-2 border font-semibold border-pink-600 bg-[--primary-background-color] rounded-lg text-[#cecece] hover:bg-pink-600 hover:text-[--primary-background-color]'
                    onClick={() => setExpanded(!isExpanded)}>
                    {openTitle}
                </button>
            )}
            
        </div>
        
    );
};

export default ExpandButton;