
"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import ReviewCard from "./ReviewCard";

const FourthPage: React.FC = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

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
    const duration = 0.7;
    const interval = 5000; // 5 seconds between slides

    const setupAnimation = () => {
      if (reviewsContainerRef.current) {
        if (timelineRef.current) {
          timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline({
          onComplete: () => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
          }
        });

        timelineRef.current
          .to(reviewsContainerRef.current.children[currentReview], {
            x: "-100%",
            opacity: 0,
            duration: duration,
            ease: "power2.inOut"
          })
          .set(reviewsContainerRef.current.children[currentReview], { x: "100%" })
          .set(
            reviewsContainerRef.current.children[(currentReview + 1) % reviews.length],
            { x: "100%", opacity: 1 }
          )
          .to(
            reviewsContainerRef.current.children[(currentReview + 1) % reviews.length],
            {
              x: "0%",
              duration: duration,
              ease: "power2.inOut"
            }
          );
      }
    };

    const timer = setTimeout(setupAnimation, interval);
    return () => {
      clearTimeout(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [currentReview, reviews.length]);

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

      <div className="mt-12 relative overflow-hidden">
        <div 
          ref={reviewsContainerRef}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="w-full transform transition-transform"
                style={{
                  opacity: index === 0 ? 1 : 0,
                  transform: `translateX(${index === 0 ? '0%' : '100%'})`
                }}
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
