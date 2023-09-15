import React from "react";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <div className=" grid grid-cols-3">
      <div className="span col-span-1 h-full overflow-hidden">
        <Navbar />
      </div>
      <div className="col-span-2 flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions, suggestions, or simply want to say hello, feel free to get in touch with us. We value your feedback and are here to assist you.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          You can contact us through the following methods:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-600">
          <li>Email: contact@example.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Food Street, Foodtown, FT 12345</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">
          We look forward to hearing from you and sharing our love for food!
        </p>
        </div>
      </div>
    </div>
  );
}
