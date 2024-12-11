import React, { useRef } from "react";
import { gsap } from "gsap";
import clsx from "clsx";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        width: "100%",
        height: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current.querySelector(".description"), {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current.querySelector(".title"), {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        width: "75%",
        height: "3rem",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current.querySelector(".description"), {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(overlayRef.current.querySelector(".title"), {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full h-full overflow-hidden rounded-3xl shadow-md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={overlayRef}
        className={clsx(
          "absolute left-1/2 top-1/2 w-[75%] h-12 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-3xl flex items-center justify-center text-text font-bold text-sm transition-all"
        )}
      >
        <div className="opacity-100 title" style={{ transition: "opacity 0.5s ease" }}>
          {title}
        </div>
        <div
          className="absolute inset-0 p-4 text-center text-sm font-normal opacity-0 description overflow-hidden transition-opacity duration-500"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
