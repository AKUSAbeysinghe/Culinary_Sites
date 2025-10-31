import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    // Data for the Quick Links column - LINKED TO YOUR PAGES
    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Chefs', path: '/chefs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Fastfoods', path: '/fast-food' },
        { name: 'Casual Dinings', path: '/casual-dining' },
        { name: 'Cafe & Bakery', path: '/cafes-bakeries' },
    ];

    // Data for the bottom policy links - LINKED TO YOUR PAGES
    const policyLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'FAQ', path: '/FAQ' },
    ];

    return (
        <footer className="bg-gray-700 text-gray-200">
            {/* Main Footer Content - RESPONSIVE */}
            <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                    
                    {/* Column 1: Logo & Description - RESPONSIVE */}
                    <div className="md:col-span-2 space-y-3 sm:space-y-4">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                            <span className="text-white">Flavor</span>
                            <span className="text-yellow-500">Haven</span>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
                            Since 1998, **FlavorHaven** has been dedicated to creating exceptional dining experiences. From our carefully crafted dishes to our warm hospitality, every detail is designed to make your visit memorable.
                        </p>

                        {/* Social Media Icons - RESPONSIVE */}
                        <div className="flex space-x-3 sm:space-x-4 pt-2">
                            <a href="#" className="hover:text-yellow-500 transition duration-300 p-1">
                                <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition duration-300 p-1">
                                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition duration-300 p-1">
                                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a href="#" className="hover:text-yellow-500 transition duration-300 p-1">
                                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links - RESPONSIVE */}
                    <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.path} className="hover:text-yellow-500 transition duration-300 block py-1">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info - RESPONSIVE */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                            Contact Info
                        </h4>
                        
                        <div className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm">
                            <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0 text-yellow-500" />
                            <div>
                                <p>123 Flavor Street</p>
                                <p>Downtown District</p>
                                <p>Foodie City, FC 12345</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                            <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-yellow-500" />
                            <p>(555) 123-FOOD</p>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm">
                            <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-yellow-500" />
                            <p>info@flavorhaven.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright and Policy Links - RESPONSIVE */}
            <div className="border-t border-gray-600">
                <div className="max-w-7xl mx-auto py-3 sm:py-4 px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-3 sm:gap-0">
                    <p className="text-gray-400 text-center sm:text-left">
                        © 2024 FlavorHaven. All rights reserved.
                    </p>
                    
                    <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 gap-2 sm:gap-0">
                        {policyLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.path} 
                                className="text-gray-400 hover:text-white transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;