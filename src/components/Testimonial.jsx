import React from 'react';
import { FaStar } from 'react-icons/fa'; // Assuming you use react-icons for the stars

// Component for displaying the star rating
const StarRating = ({ rating = 5 }) => {
    return (
        <div className="flex space-x-0.5 mb-4">
            {Array.from({ length: rating }).map((_, index) => (
                <FaStar key={index} className="w-5 h-5 text-yellow-500" />
            ))}
        </div>
    );
};

const TestimonialCard = ({ quote, author, title }) => {
    return (
        <div className="bg-gray-200 p-8 rounded-lg shadow-xl flex flex-col h-full">
            <StarRating />

            {/* Quote */}
            <p className="text-gray-700 text-lg italic mb-6 flex-grow">
                "{quote}"
            </p>

            {/* Separator Line */}
            <hr className="border-gray-400 mb-4" />

            {/* Author Info */}
            <div>
                <p className="text-gray-900 font-semibold text-lg mb-1">
                    {author}
                </p>
                <p className="text-gray-600 text-base">
                    {title}
                </p>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const testimonialsData = [
        {
            quote: "Absolutely incredible food! The flavors are out of this world and the service is exceptional. FlavorHaven has become our family's favorite dining spot.",
            author: "Sarah Johnson",
            title: "Food Enthusiast",
        },
        {
            quote: "The atmosphere is perfect for both casual dining and special occasions. Every dish is a masterpiece, and you can taste the quality in every bite.",
            author: "Michael Chen",
            title: "Local Resident",
        },
        {
            quote: "I've been coming here for years, and they never disappoint. The consistency in quality and the warmth of the staff make this place truly special.",
            author: "Emily Rodriguez",
            title: "Regular Customer",
        },
    ];

    return (
        <section className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 mb-4">
                    What Our Customers Say
                </h2>
                
                {/* Subheading */}
                <p className="text-lg text-gray-300 mb-12">
                    Don't just take our word for it - hear from the people who make FlavorHaven special
                </p>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;