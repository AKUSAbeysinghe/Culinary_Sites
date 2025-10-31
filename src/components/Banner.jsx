import React from 'react';
import { useRef } from 'react';
import Banner from '../assets/Banner.jpg';

const HeroSection = () => {
    const sectionRef = useRef(null);

    // ✅ SCROLL TO BOTTOM ON CLICK
    const scrollToBottom = () => {
        sectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    };

    return (
        <div className="relative h-screen bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: `url(${Banner})` }}>
            
            {/* ✅ RESPONSIVE OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-30"></div>

            {/* ✅ RESPONSIVE HERO CONTENT */}
            <div 
                ref={sectionRef}
                className="relative flex flex-col items-center justify-center text-center h-full px-4 py-12 sm:py-16 md:py-20"
            >
                {/* ✅ RESPONSIVE TITLE */}
                <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                    <span className="text-white">Flavor</span>
                    <span className="text-yellow-500">Haven</span>
                </h1>
                
                {/* ✅ RESPONSIVE DESCRIPTION */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-sm sm:max-w-md md:max-w-2xl mb-6 sm:mb-8 md:mb-10 font-medium tracking-wide leading-relaxed">
                    Where every bite tells a story of passion, quality, and unforgettable taste experiences
                </p>

                {/* ✅ RESPONSIVE BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-none justify-center z-10">
                    <button 
                        onClick={scrollToBottom}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 sm:px-8 rounded-lg shadow-xl text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 border-2 border-yellow-500 flex items-center justify-center min-w-[140px] sm:min-w-[180px]"
                    >
                        Browse Menu
                    </button>
                    <button 
                        onClick={scrollToBottom}
                        className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-6 sm:px-8 rounded-lg shadow-xl text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white flex items-center justify-center min-w-[140px] sm:min-w-[180px]"
                    >
                        Browse Locations
                    </button>
                </div>

                {/* ✅ RESPONSIVE SCROLL DOT */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 z-10">
                    <div className="w-2 h-2 bg-white rounded-full opacity-70 animate-bounce"></div>
                </div>
            </div>
        </div>
    );
};

const FlavorHavenWebsite = () => {
    return (
        <div className="font-sans">
            <HeroSection />
            {/* Other sections go here */}
        </div>
    );
};

export default FlavorHavenWebsite;