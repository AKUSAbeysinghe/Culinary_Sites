import React from 'react';
// Assuming you are using an icon library like 'react-icons'
import { RiTimeLine, RiAwardLine, RiGroupLine } from 'react-icons/ri'; 

const StorySection = () => {
    // Data for the statistics block
    const stats = [
        { icon: RiTimeLine, value: '25+', label: 'Years of Excellence' },
        { icon: RiAwardLine, value: '50+', label: 'Awards Won' },
        { icon: RiGroupLine, value: '1M+', label: 'Happy Customers' },
    ];

    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Left Column: Our Story Text and Stats */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header and Main Text */}
                    <div className="space-y-4">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-100">
                            Our Story
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            **Founded in 1998, FlavorHaven began as a small family restaurant with a simple mission: to serve exceptional food that brings people together.** Today, we've grown into a beloved dining destination while staying true to our core values of **quality, warmth, and community.**
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
                            Every dish we serve is crafted with the **finest ingredients, time-honored recipes, and a passion for culinary excellence** that has been passed down through generations.
                        </p>
                    </div>

                    {/* Statistics Block */}
                    <div className="flex flex-wrap gap-x-12 gap-y-8 pt-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                {/* Icon */}
                                <stat.icon className="w-10 h-10 mx-auto mb-2 text-yellow-500" />
                                
                                {/* Value */}
                                <p className="text-3xl font-bold text-gray-100">
                                    {stat.value}
                                </p>
                                
                                {/* Label */}
                                <p className="text-sm text-gray-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Mission and Values Cards */}
                <div className="space-y-8 lg:col-span-1">
                    
                    {/* Our Mission Card */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-t-4 border-yellow-500/0">
                        <h3 className="text-xl font-semibold mb-3 text-gray-100">
                            Our Mission
                        </h3>
                        <p className="text-gray-300">
                            To create memorable dining experiences through **exceptional food, outstanding service, and a welcoming atmosphere** that feels like home.
                        </p>
                    </div>

                    {/* Our Values Card */}
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl border-t-4 border-yellow-500/0">
                        <h3 className="text-xl font-semibold mb-3 text-gray-100">
                            Our Values
                        </h3>
                        <p className="text-gray-300">
                            **Quality ingredients, authentic flavors, sustainable practices, and treating every guest like family** are at the heart of everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;