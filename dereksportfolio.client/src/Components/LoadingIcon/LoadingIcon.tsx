import React from 'react';

interface LoadingIconProps {
  size?: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({ size }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75">
      <div className={`${size || 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'} animate-spin text-green-400`}>
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </div>
  );
};

export default LoadingIcon;