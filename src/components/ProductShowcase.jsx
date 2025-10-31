import React from 'react';
import resturantone from "../assets/Backgrounds/resturant.jpeg";
import resturanttwo from "../assets/Backgrounds/chefs.jpeg";

const ExperienceSection = () => {
    return (
        <section className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 mb-4">
                    Experience FlavorHaven
                </h2>
                
                {/* Subheading */}
                <p className="text-lg text-gray-300 mb-12">
                    Step inside and discover the ambiance that makes every meal memorable
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Restaurant Interior Image */}
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        {/* Replace with your actual image path or URL */}
                        <img 
                            src={resturantone} 
                            alt="Restaurant Interior" 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                    {/* Chef Cooking Image */}
                    <div className="rounded-lg overflow-hidden shadow-xl">
                        {/* Replace with your actual image path or URL */}
                        <img 
                            src={resturanttwo}
                            alt="Chef Cooking" 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;