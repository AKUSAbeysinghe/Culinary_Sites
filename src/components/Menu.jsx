import React from 'react';
import Wings from '../assets/wings.jpg';
import MainMeal from "../assets/MainMeal.jpg";
import ChocCake from "../assets/ChocCake.jpg";

const MenuItemCard = ({ category, price, title, description, imageUrl }) => {
    return (
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
            {/* Image Section */}
            <div className="h-64 overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover transition duration-500 ease-in-out hover:opacity-90"
                />
            </div>
            
            {/* Text Content */}
            <div className="p-5 text-left">
                {/* Category and Price */}
                <div className="flex justify-between items-baseline mb-2">
                    <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wider">
                        {category}
                    </p>
                    <p className="text-lg font-bold text-gray-400">
                        ${price}
                    </p>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed min-h-[60px]">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeaturedMenuSection = () => {
    const featuredItems = [
        {
            category: 'Appetizers',
            price: '12.99',
            title: 'Signature Wings',
            description: 'Perfectly seasoned and grilled to perfection, served with our house-made sauces',
            imageUrl: Wings,
        },
        {
            category: 'Salads',
            price: '14.99',
            title: 'Garden Fresh Caesar',
            description: 'Crisp romaine lettuce, parmesan cheese, croutons, and grilled chicken',
            imageUrl: MainMeal,
        },
        {
            category: 'Desserts',
            price: '8.99',
            title: 'Decadent Chocolate Cake',
            description: 'Rich chocolate layers with fresh berries and house-made whipped cream',
            imageUrl: ChocCake,
        },
    ];

    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                
                {/* Header */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-400 mb-4">
                    Featured Menu
                </h2>
                
                {/* Subheading */}
                <p className="text-lg text-gray-300 mb-12">
                    Discover our most popular dishes, crafted with passion and served with pride
                </p>

                {/* Menu Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredItems.map((item, index) => (
                        <MenuItemCard 
                            key={index}
                            category={item.category}
                            price={item.price}
                            title={item.title}
                            description={item.description}
                            imageUrl={item.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenuSection;