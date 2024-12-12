
"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function SecondPage() {
  const services = [
    {
      title: "Domestic Cleaning",
      description: "Professional home cleaning services tailored to your needs",
      image: "/domestic.jpg"
    },
    {
      title: "Commercial Cleaning",
      description: "Complete cleaning solutions for commercial spaces",
      image: "/commercial.png"
    },
    {
      title: "Office Cleaning",
      description: "Maintain a clean and productive workspace",
      image: "/office.jpg"
    },
    {
      title: "Medical Cleaning",
      description: "Specialized cleaning for medical facilities",
      image: "/medical.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen p-6 md:p-20 -mt-1">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-base md:text-lg text-text leading-normal max-w-3xl mx-auto">
          At Kallu Cleaning Service, we pride ourselves on delivering top-notch cleaning solutions tailored to your needs. Because a clean space isn't just about hygiene—it's about peace of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="w-full aspect-[3/4]">
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
