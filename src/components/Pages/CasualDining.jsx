import React, { useState, useEffect } from "react";
import DiningBanner from "../../assets/Dining/DiningBanner.jpg";

// ✅ YOUR WHATSAPP NUMBER - CHANGE THIS ONE LINE!
const WHATSAPP_NUMBER = "+1234567890"; // ← YOUR NUMBER HERE!

// ✅ WHATSAPP FUNCTION - FOR ALL BUTTONS!
const openWhatsApp = (itemName = "", category = "Casual Dining") => {
  const message = itemName 
    ? `Hi! I'd like to order ${itemName} from ${category}! 🍽️`
    : `Hi! I'd like to order from ${category}! 🍽️`;
  
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

const FastFoodHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${DiningBanner || "https://via.placeholder.com/1700x400"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-poppins">
          Casual Dining <br />
          <span className="text-green-500">Chains</span>
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-poppins">
          Enjoy restaurant-quality meals in a relaxed atmosphere. Perfect for family dinners and casual gatherings.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          {/* ✅ HERO WHATSAPP BUTTON */}
          <button 
            onClick={() => openWhatsApp()}
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 font-poppins w-full sm:w-auto"
          >
            Browse Restaurants 🍽️
          </button>
        </div>
      </div>
    </div>
  );
};

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={item.image_url || "https://via.placeholder.com/150?text=No+Image"}
          alt={item.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/150?text=No+Image";
          }}
        />
        {item.popular && (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm font-bold px-3 py-1 rounded-full">
          ₹{Number(item.price).toFixed(2)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 font-poppins">{item.name}</h3>
        <p className="mt-2 text-gray-600 text-sm font-poppins">{item.description || "No description available"}</p>
        <p className="mt-4 text-xs text-gray-500 font-poppins">{item.chef || "N/A"}</p>
        {/* ✅ MENU CARD WHATSAPP BUTTON */}
        <button
          onClick={() => openWhatsApp(item.name)}
          className="mt-6 w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300 font-poppins block text-center"
        >
          Order Now 🍽️
        </button>
      </div>
    </div>
  );
};

const AppetizersAndStarters = ({ items }) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Appetizers & Starters</h2>
      </div>
      {items.length === 0 ? (
        <p className="text-center text-gray-600 font-poppins">No items available in this category</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const MainCourses = ({ items }) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Main Courses</h2>
      </div>
      {items.length === 0 ? (
        <p className="text-center text-gray-600 font-poppins">No items available in this category</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const PastaAndRisotto = ({ items }) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Pasta & Risotto</h2>
      </div>
      {items.length === 0 ? (
        <p className="text-center text-gray-600 font-poppins">No items available in this category</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const WhyChooseCasualDining = () => {
  const services = [
    { title: "Full Service Experience", description: "Restaurant-quality meals with complete dining experience at home", icon: "⚡" },
    { title: "Family Friendly", description: "Perfect portions and options for the whole family to enjoy", icon: "💰" },
    { title: "Comfort Food", description: "Hearty, satisfying meals that feel like home cooking", icon: "🛡️" },
    { title: "Special Occasions", description: "Great for date nights, celebrations, and weekend treats", icon: "📱" },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">Why Choose Casual Dining?</h2>
        <p className="mt-2 text-gray-600 font-poppins">Experience the perfect balance of quality, comfort, and convenience</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 text-3xl mb-4">
                {service.icon === "⚡" && <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                {service.icon === "💰" && <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" /></svg>}
                {service.icon === "🛡️" && <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.023 12.023 0 002.5 9.5c0 4.17 2.76 7.625 6.5 9.176V21h3v-2.324c3.74-1.551 6.5-5.006 6.5-9.176a12.023 12.023 0 00-2.5-4.476z" /></svg>}
                {service.icon === "📱" && <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 font-poppins">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-center font-poppins">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center p-8 rounded-lg shadow-md bg-green-50">
        <h2 className="text-3xl font-bold text-gray-800 font-poppins">Craving Restaurant Quality?</h2>
        <p className="mt-4 text-gray-600 font-poppins">Order from your favorite casual dining restaurants and enjoy restaurant-quality meals at home!</p>
        {/* ✅ CTA WHATSAPP BUTTON */}
        <button
          onClick={() => openWhatsApp()}
          className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300 font-poppins inline-block"
        >
          Order Now 🍽️
        </button>
      </div>
    </div>
  );
};

const CasualDining = () => {
  const [appetizersItems, setAppetizersItems] = useState([]);
  const [mainCoursesItems, setMainCoursesItems] = useState([]);
  const [pastaAndRisottoItems, setPastaAndRisottoItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchMenuItems = async () => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_menu_items.php");
      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        const casualDiningItems = data.data.filter(item => item.category_id === "7" || item.category_id === 7);
        setAppetizersItems(casualDiningItems.filter(item => item.sub_category_id === "19" || item.sub_category_id === 19));
        setMainCoursesItems(casualDiningItems.filter(item => item.sub_category_id === "20" || item.sub_category_id === 20));
        setPastaAndRisottoItems(casualDiningItems.filter(item => item.sub_category_id === "21" || item.sub_category_id === 21));
      } else {
        setError(data.message || "⚠️ Could not fetch menu items.");
        setAppetizersItems([]);
        setMainCoursesItems([]);
        setPastaAndRisottoItems([]);
      }
    } catch (e) {
      setError("⚠️ Could not fetch menu items: " + e.message);
      setAppetizersItems([]);
      setMainCoursesItems([]);
      setPastaAndRisottoItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div>
      <FastFoodHero />
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-200 text-red-800 border-2 border-red-400 font-medium text-center font-poppins">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-600 font-poppins">Loading casual dining options...</p>
        </div>
      )}
      <AppetizersAndStarters items={appetizersItems} />
      <MainCourses items={mainCoursesItems} />
      <PastaAndRisotto items={pastaAndRisottoItems} />
      <WhyChooseCasualDining />
      <CallToAction />
    </div>
  );
};

export default CasualDining;