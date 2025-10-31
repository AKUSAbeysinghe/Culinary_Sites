import React from 'react';
import Chef1 from "../assets/Chefs/Chef1.jpg";
import Chef2 from "../assets/Chefs/Chef2.jpg";
import Chef3 from "../assets/Chefs/Chef3.jpg";

const OurChefs = () => {
  const chefs = [
    { name: 'Marco De Luca', title: 'Station Chef', image: Chef1 },
    { name: 'Isabella Rossi', title: 'Head Chef', image: Chef2 },
    { name: 'Alexander Jensen', title: 'Pastry Chef', image: Chef3 },
  ];

  return (
    <div className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Chefs</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          with a culinary genius that transforms ingredients into art, orchestrates a symphony of flavors on every plate.
        </p>

        {/* SIMPLE 3-CHEF DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {chefs.map((chef) => (
            <div key={chef.name} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden text-center">
              <img 
                src={chef.image} 
                alt={chef.name} 
                className="w-full h-80 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mt-2">{chef.name}</h3>
                <p className="text-gray-400">{chef.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurChefs;