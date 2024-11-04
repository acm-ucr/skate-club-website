"use client"; // Add this line if you're using Next.js or a similar framework that uses Server Components by default

import React from 'react';

function Home() {
    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button
            className="bg-white text-black font-bold italic py-2 px-6 rounded-full hover:bg-gray-100 transition duration-200"
            style={{ fontFamily: 'fantasy' }}
            onClick={handleClick}
        >
            Join Now
        </button>
    );
}

export default Home;
