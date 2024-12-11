import React from "react";
import ServiceCard from "./ServiceCard";

export default function SecondPage() {
  return (
    <div className="bg-background min-h-screen p-6 md:p-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Services
        </h1>
        <p className="text-base md:text-base text-text leading-normal max-w-3xl mx-auto">
          At Kallu Cleaning Service, we pride ourselves on delivering top-notch cleaning solutions tailored to your needs. Whether it’s your cozy home, bustling office, or an end-of-lease deep clean, we’re here to make every corner spotless and inviting.
          <br />
          {/* <br />
          Our professional team uses eco-friendly products and the latest techniques to ensure a thorough and safe clean every time. Explore our range of services and let us help you create a space that’s not just clean but truly refreshing.
          <br /> */}
          <br />
          Because a clean space isn’t just about hygiene—it’s about peace of mind.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full aspect-[3/4]">
          <ServiceCard
            image="elon.jpeg"
            title="Home Cleaning"
            description="Expert cleaning for your home, ensuring every corner is spotless."
          />
        </div>
        <div className="w-full aspect-[3/4]">
          <ServiceCard
            image="elon.jpeg"
            title="Office Cleaning"
            description="Keep your workspace pristine and professional with our services."
          />
        </div>
        <div className="w-full aspect-[3/4]">
          <ServiceCard
            image="elon.jpeg"
            title="End of Lease Cleaning"
            description="Make your move-out stress-free with our deep cleaning solutions."
          />
        </div>
      </div>
    </div>
  );
}
