import React from 'react';

interface ExpandButtonProps {
    openTitle: string;
    closeTitle: string;
    isExpanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ openTitle, closeTitle, isExpanded, setExpanded }) => {
    return (
        <div className="flex">
            <button
                className={`w-full sm:w-[180px] p-2 border font-semibold rounded-lg transition-colors duration-300 ${
                    isExpanded
                        ? 'border-pink-600 bg-pink-600 text-[--primary-background-color] hover:bg-pink-700'
                        : 'border-pink-600 bg-[--primary-background-color] text-[#cecece] hover:bg-pink-600 hover:text-[--primary-background-color]'
                }`}
                onClick={() => setExpanded(!isExpanded)}
            >
                <span className="text-sm sm:text-base">
                    {isExpanded ? closeTitle : openTitle}
                </span>
            </button>
        </div>
    );
};

export default ExpandButton;