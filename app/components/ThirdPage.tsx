"use client";
import Image from "next/image";

export default function ThirdPage() {
  return (
    <section className="rounded-2xl overflow-hidden w-full px-6 py-4 md:px-20  bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen relative">
      {/* Fading Top Border */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-blue-700 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Side Text Content */}
        <div className="md:w-1/2 md:pr-8 z-10">
          <h2 className="text-4xl font-bold text-white mb-6 leading-snug font-heading">
            Our Strategy to Achieve Our Mission
          </h2>
          <p className="text-white text-base font-body mb-4">
            At Kallu Cleaning Service, our mission is to deliver exceptional
            cleaning solutions that enhance comfort, health, and productivity.
            We achieve this by truly understanding your unique needs and
            tailoring our services accordingly. Our professional team, equipped
            with cutting-edge tools and eco-friendly products, ensures a safe
            and thorough clean every time. Through consistent quality checks and
            reliable service, we guarantee results that exceed your
            expectations.
          </p>
          <p className="text-white text-base font-body mb-4">
            We also believe in staying adaptable and innovative. By embracing
            new cleaning technologies and valuing client feedback, we
            continuously refine our processes to serve you better. Transparency
            and trust are at the heart of everything we do—clear communication
            and honest practices mean you always know what to expect. With this
            approach, we aim not just to clean spaces but to create environments
            where you can thrive.
          </p>
          <button className="mt-6 px-6 py-3 rounded-3xl bg-primary hover:bg-accent text-white transition-colors font-body font-bold">
            Explore More
          </button>
        </div>

        {/* Right Side Image */}
        <div
          className="hidden md:block md:w-1/2 relative"
          style={{ height: "120vh" }}
        >
          <Image
            src="/cleanerGirl.png"
            alt="Descriptive Alt Text"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="absolute"
          />
        </div>
      </div>
    </section>
  );
}
