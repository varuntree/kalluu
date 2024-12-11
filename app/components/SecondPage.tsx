
"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function SecondPage() {
  const services = [
    {
      title: "Domestic Cleaning",
      description: "Professional home cleaning services tailored to your needs",
      image: "/cleanerGirl.png"
    },
    {
      title: "Commercial Cleaning",
      description: "Complete cleaning solutions for commercial spaces",
      image: "/cleanerGirl.png"
    },
    {
      title: "Window Cleaning",
      description: "Crystal clear windows with professional cleaning",
      image: "/window.svg"
    },
    {
      title: "End of Lease Cleaning",
      description: "Thorough cleaning to ensure bond return",
      image: "/cleanerGirl.png"
    },
    {
      title: "Office Cleaning",
      description: "Maintain a clean and productive workspace",
      image: "/cleanerGirl.png"
    },
    {
      title: "Carpet Cleaning",
      description: "Deep carpet cleaning and stain removal",
      image: "/cleanerGirl.png"
    },
    {
      title: "Built-Up Cleaning",
      description: "Heavy-duty cleaning for built-up areas",
      image: "/cleanerGirl.png"
    },
    {
      title: "Medical Cleaning",
      description: "Specialized cleaning for medical facilities",
      image: "/cleanerGirl.png"
    }
  ];

  return (
    <div className="bg-background min-h-screen p-6 md:p-20">
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
