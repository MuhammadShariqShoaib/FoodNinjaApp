import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <div className=" grid grid-cols-3">
    <div className="span col-span-1 h-full overflow-hidden">
      <Navbar />
    </div>
    <div className="col-span-2 flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our food website! We are passionate about culinary delights and bringing people together through the joy of food. Our website is dedicated to sharing delicious recipes, culinary tips, and creating a vibrant food-loving community.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Here's what you can expect from us:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          <li>Explore a diverse collection of mouthwatering recipes from around the world.</li>
          <li>Discover expert cooking techniques and hacks to enhance your culinary skills.</li>
          <li>Connect with fellow food enthusiasts who share your passion.</li>
          <li>Save your favorite recipes and craft personalized menus.</li>
          <li>Stay updated on the latest food trends and seasonal ingredients.</li>
        </ul>

      </div>
    </div>
  </div>
  )
}

  