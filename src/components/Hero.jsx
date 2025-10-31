import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-100">
      <h1 className="text-5xl font-bold mb-4 leading-tight">The Urban Electric Bike</h1>
      <p className="text-lg mb-6 max-w-xl text-gray-700">
        Cowboy is the new way to move through your city. Effortless. Elegant. Electric.
      </p>
      <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">Explore Models</button>
    </section>
  );
};

export default Hero;
