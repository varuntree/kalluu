
"use client";
import React from "react";

const Footer = () => {
  const services = [
    "Domestic Cleaning",
    "Commercial Cleaning",
    "Window Cleaning",
    "End of Lease Cleaning",
    "Office Cleaning",
    "Carpet Cleaning",
    "Built-Up Cleaning",
    "Medical Cleaning",
  ];

  return (
    <footer className="bg-primary rounded-t-3xl text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Kallu Cleaning Service</h3>
          <p className="mb-2">Your trusted cleaning partner</p>
          <div className="mt-4">
            <p className="mb-1">Email: kalluucleaningservices@gmail.com</p>
            <p className="mb-1">Phone: +61 426 600 521</p>
            <p>Address: 72 Northcote Dr, Para Hils West SA 5096</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="grid grid-cols-1 gap-2">
            {services.map((service, index) => (
              <li key={index} className="hover:text-secondary transition-colors">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Business Hours</h3>
          <ul>
            <li className="mb-1">Monday - Friday: 8:00 AM - 6:00 PM</li>
            <li className="mb-1">Saturday: 9:00 AM - 4:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-4 text-center border-t border-white/20">
        <p>&copy; 2024 Kallu Cleaning Service. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
