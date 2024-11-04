import React from 'react';

const JoinNow = ({ label, onClick }) => {
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
