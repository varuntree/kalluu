import React from "react";
import { gsap } from "gsap";
import ReviewCard from "./ReviewCard";

const FourthPage: React.FC = () => {
  React.useEffect(() => {
    // Animation for the title and other elements
    gsap.from(".title", { y: 50, opacity: 0, duration: 1 });
    gsap.from(".image", { x: -50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".reviews", { x: 50, opacity: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <div className="bg-background min-h-screen text-text font-body px-6 py-12 md:px-20 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
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
      <div className="reviews mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="max-w-md  mx-auto">
          <ReviewCard
            text="Amazing service, cheaper price. They clean my home quickly & I really like their work. Love it!"
            authorName="Jonathan Daniel"
            authorRole="Pick the Suitable plan for you."
            authorImage="/path-to-reviewer-image.jpg"
          />
        </div>
        <div className="max-w-md mx-auto">
          <ReviewCard
            text="The team was professional and efficient. Highly recommend their services!"
            authorName="Sarah Johnson"
            authorRole="Customer since 2020."
            authorImage="/path-to-reviewer2-image.jpg"
          />
        </div>
        <div className="max-w-md mx-auto">
          <ReviewCard
            text="Outstanding experience. My home has never looked better!"
            authorName="Michael Smith"
            authorRole="Long-term customer."
            authorImage="/path-to-reviewer3-image.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
