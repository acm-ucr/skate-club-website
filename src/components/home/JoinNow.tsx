import React from 'react';

interface JoinNowProps {
    label: string;
    onClick: () => void;
}

const JoinNow = ({ label, onClick }: JoinNowProps) => {
    return (
        <button
            className="bg-white text-black font-bold italic py-2 px-6 rounded-full hover:bg-gray-100 transition duration-200"
            style={{ fontFamily: 'fantasy' }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default JoinNow;