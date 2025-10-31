// import React, { useState } from 'react';
// import AllDishone from "../assets/Gallery/Dish1.jpg";
// import AllResone from "../assets/Gallery/Resturant1.jpg";
// import AllRestwo from "../assets/Gallery/Resturant2.jpg";
// import AllDishtwo from "../assets/Gallery/Dish2.jpg";
// import AllKitchen2 from "../assets/Gallery/Event1.jpg";
// import AllKitchen3 from "../assets/Gallery/Event2.jpg";

// const galleryItems = [
//   {
//     category: 'Signature Dishes',
//     imageUrl: AllDishone,
//   },
//   {
//     category: 'Restaurant',
//     imageUrl: AllResone,
//   },
//   {
//     category: 'Kitchen',
//     imageUrl: AllRestwo,
//   },
//   {
//     category: 'Signature Dishes',
//     imageUrl: AllDishtwo,
//   },
//   {
//     category: 'Restaurant',
//     imageUrl: AllKitchen2,
//   },
//   {
//     category: 'Events',
//     imageUrl: AllKitchen3,
//   },
// ];

// const galleryFilters = ['All Photos', 'Signature Dishes', 'Restaurant', 'Kitchen', 'Events'];

// const RestaurantGallery = () => {
//   const [activeFilter, setActiveFilter] = useState('All Photos');

//   const filteredItems =
//     activeFilter === 'All Photos'
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeFilter);

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
//         <br></br>
//         <br></br>
//         <br></br>
//           Restaurant Gallery
//         </h2>
//         <p className="mt-2 text-gray-600">
//           Take a visual journey through our culinary world, from signature dishes to our elegant dining spaces
//         </p>
//         <div className="mt-8 flex flex-wrap justify-center space-x-2 md:space-x-4">
//           {galleryFilters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-orange-500 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
//             >
//               <img
//                 src={item.imageUrl}
//                 alt={item.category}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
//                 <span className="text-white text-lg font-semibold capitalize">
//                   {item.category}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantGallery;





import React, { useState, useEffect } from "react";

const galleryFilters = [
  "All Photos",
  "Signature Dishes",
  "Restaurant",
  "Kitchen",
  "Events",
];

const RestaurantGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchGalleryImages = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_gallery_images.php", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setGalleryItems(data);
      } else {
        setError("⚠️ Could not fetch gallery images: Invalid response format");
        setGalleryItems([]);
      }
    } catch (e) {
      setError("⚠️ Could not fetch gallery images: " + e.message);
      setGalleryItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const filteredItems =
    activeFilter === "All Photos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* <br></br>
        <br></br> */}
        {/* <br></br> */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
          Restaurant Gallery
        </h2>
        <p className="mt-2 text-gray-600 font-poppins">
          Take a visual journey through our culinary world, from signature dishes to our elegant dining spaces
        </p>
        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium font-poppins">
            {error}
          </div>
        )}
        {isLoading && (
          <div className="mt-6 text-gray-600 font-poppins">
            Loading gallery images...
          </div>
        )}
        <div className="mt-8 flex flex-wrap justify-center space-x-2 md:space-x-4">
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 font-poppins ${
                activeFilter === filter
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.length === 0 && !isLoading ? (
            <p className="text-center text-gray-600 font-poppins col-span-full">
              No images available for this category
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={item.image_url || "https://via.placeholder.com/150?text=No+Image"}
                  alt={item.category}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150?text=No+Image";
                    console.error(`Failed to load image: ${item.image_url}`);
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold capitalize font-poppins">
                    {item.category}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantGallery;