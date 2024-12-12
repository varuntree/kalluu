"use client";
import React from "react";
import ServiceCard from "./ServiceCard";

export default function SecondPage() {
  const services = [
    {
      title: "Domestic Cleaning",
      description:
        "Discover the peace of mind that comes with a clean and organized space. Our Domestic Cleaning service is designed to fit your lifestyle, offering professional home cleaning that goes beyond the basics. Whether it's dusting off your cherished bookshelves or ensuring your floors gleam, we tailor our services to make your home a spotless sanctuary where you can truly relax.",
      image: "/domestic.jpg",
    },
    {
      title: "Commercial Cleaning",
      description:
        "For business owners, our Commercial Cleaning service provides the ultimate solution for maintaining a professional and inviting environment. We understand that each commercial space has unique needs, so we offer customized cleaning plans that cover everything from daily upkeep to deep cleaning, ensuring that your premises not only look good but also promote a healthy workplace.",
      image: "/commercial.png",
    },
    {
      title: "Office Cleaning",
      description:
        "Our Office Cleaning service is all about enhancing productivity through cleanliness. A clean office space can significantly impact employee morale and efficiency. We meticulously clean from desk spaces to common areas, providing a fresh start every day so your team can focus on what they do best.",
      image: "/office.jpg",
    },
    {
      title: "Medical Cleaning",
      description:
        "When it comes to healthcare, cleanliness is not just about appearance; it's about safety and health. Our Medical Cleaning services are specifically designed to meet the stringent standards required in medical environments. From waiting rooms to operating theaters, we ensure that every inch of your facility is sanitized, reducing the risk of infection and promoting a safe environment for both staff and patients.",
      image: "/medical.jpg",
    },
  ];

  return (
    <div id="services" className="bg-white min-h-screen p-6 md:p-20 -mt-1">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-base md:text-lg text-text leading-normal max-w-3xl mx-auto">
          At Kalluu Cleaning Service, we pride ourselves on delivering top-notch
          cleaning solutions tailored to your needs. Because a clean space isn't
          just about hygiene—it's about peace of mind.
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
