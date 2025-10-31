import React from 'react';
// Assuming you are using 'react-icons' for the icons
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';

// Component for the reusable info card
const InfoCard = ({ icon: Icon, title, content }) => {
    return (
        <div className="bg-gray-200 p-6 rounded-lg shadow-xl text-center flex flex-col items-center">
            {/* Icon */}
            <div className="text-yellow-500 mb-4">
                <Icon className="w-10 h-10" />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
            </h3>
            
            {/* Content (rendered with line breaks using map) */}
            <div className="text-gray-700 space-y-1">
                {content.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        </div>
    );
};

const ContactActionSection = () => {
    // Data for the four info cards
    const contactData = [
        {
            icon: FaMapMarkerAlt,
            title: 'Visit Us',
            content: ['123 Flavor Street', 'Downtown District', 'Foodie City, FC 12345'],
        },
        {
            icon: FaPhone,
            title: 'Call Us',
            content: ['(555) 123-FOOD', '(555) 123-3663'],
        },
        {
            icon: FaClock,
            title: 'Hours',
            content: ['Mon-Thu: 11am-10pm', 'Fri-Sat: 11am-11pm', 'Sun: 11am-9pm'],
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            content: ['info@flavorhaven.com', 'reservations@flavorhaven.com'],
        },
    ];

    return (
        <section className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 mb-4">
                    Visit FlavorHaven
                </h2>
                
                {/* Subheading */}
                <p className="text-lg text-gray-300 mb-12">
                    We'd love to welcome you to our restaurant family. Come experience the flavors that make us special.
                </p>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {contactData.map((item, index) => (
                        <InfoCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300 border-2 border-yellow-500">
                        Make a Reservation
                    </button>
                    <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg shadow-lg text-lg transition duration-300">
                        Order Online
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactActionSection;