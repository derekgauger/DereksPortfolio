import React from 'react';

interface DividerProps {
    style?: React.CSSProperties;
    tailwind?: string;
}

const Divider: React.FC<DividerProps> = ({ style, tailwind }) => {
    return (
        <div className={tailwind} style={style}></div>
    );
};

export default Divider;