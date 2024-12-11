
"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ReviewCard from "./ReviewCard";

const FourthPage: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      text: "Amazing service, cheaper price. They clean my home quickly & I really like their work. Love it!",
      authorName: "Jonathan Daniel",
      authorRole: "Pick the Suitable plan for you.",
      authorImage: "/path-to-reviewer-image.jpg"
    },
    {
      text: "The team was professional and efficient. Highly recommend their services!",
      authorName: "Sarah Johnson",
      authorRole: "Customer since 2020.",
      authorImage: "/path-to-reviewer2-image.jpg"
    },
    {
      text: "Outstanding experience. My home has never looked better!",
      authorName: "Michael Smith",
      authorRole: "Long-term customer.",
      authorImage: "/path-to-reviewer3-image.jpg"
    }
  ];

  useEffect(() => {
    gsap.from(".title", { y: 50, opacity: 0, duration: 1 });
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile && reviewsContainerRef.current) {
      gsap.to(reviewsContainerRef.current.children, {
        x: `${-100 * currentReview}%`,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [currentReview]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-background min-h-screen text-text font-body px-6 py-12 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="title text-4xl md:text-5xl font-bold mb-6">
            What our customers say about us
          </h2>
          <p className="text-base md:text-xl">
            We have been established for <span className="font-bold">more than 5 years.</span>
            Thousands of customers have given their ratings to us and 98% of our customers are satisfied.
          </p>
        </div>
      </div>

      {/* Review Section */}
      <div className="mt-12 relative">
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-between mb-4 md:hidden">
          <button
            onClick={prevReview}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Previous
          </button>
          <button
            onClick={nextReview}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>

        {/* Reviews Container */}
        <div 
          ref={reviewsContainerRef}
          className="relative overflow-hidden"
        >
          <div className={`
            flex transition-transform duration-500
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8
          `}>
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4 md:px-0"
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
