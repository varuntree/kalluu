
"use client";
import React, { useRef, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (overlayRef.current) {
      // Kill any existing animation
      if (timeline.current) {
        timeline.current.kill();
      }
      
      timeline.current = gsap.timeline()
        .to(overlayRef.current, {
          width: "100%",
          height: "100%",
          duration: 0.3,
          ease: "power2.out"
        })
        .to(overlayRef.current.querySelector(".title"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out"
        }, 0)
        .to(overlayRef.current.querySelector(".description"), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 0.2);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (overlayRef.current) {
      // Kill any existing animation
      if (timeline.current) {
        timeline.current.kill();
      }
      
      timeline.current = gsap.timeline()
        .to(overlayRef.current.querySelector(".description"), {
          opacity: 0,
          duration: 0.2,
          ease: "power2.out"
        })
        .to(overlayRef.current, {
          width: "75%",
          height: "3rem",
          duration: 0.3,
          ease: "power2.out"
        })
        .to(overlayRef.current.querySelector(".title"), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        }, 0.2);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div
        ref={overlayRef}
        className="absolute left-1/2 top-1/2 w-[75%] h-12 transform -translate-x-1/2 -translate-y-1/2 
                   bg-white/30 backdrop-blur-md rounded-3xl flex items-center justify-center 
                   text-text font-bold text-sm transition-all duration-300"
      >
        <h3 className="title absolute inset-0 flex items-center justify-center opacity-100 px-4">
          {title}
        </h3>
        <p className="description absolute inset-0 p-4 text-center text-base font-bold opacity-0">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
