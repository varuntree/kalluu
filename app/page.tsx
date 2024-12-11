"use client"
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

export default function Home() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    // Animate the bubble: grow from scale 0 to large and then shrink back
    gsap.fromTo(
      bubbleRef.current,
      { scale: 10 },
      {
        scale: 0, 
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    );
  }, []);

  return (
    <div className="relative bg-background  h-screen">
      {/* Animated Bubble Background */}
      <div
        ref={bubbleRef}
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full bg-blue-800 
                   blur-3xl opacity-50 z-0"
      ></div>

      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <header className="relative z-10 pt-20">
        <MainPage />
      </header>

      {/* ***** Add New Sections Below *****
      
      For example:
      <section className="relative z-10 py-20">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        {/* Add your services content here */}
      {/* </section>
    
      <section className="relative z-10 py-20">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        {/* Add testimonials content here */}
      {/* </section>

      <section className="relative z-10 py-20">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        {/* Add contact form or info here */}
      {/* </section>
      
      ***** End of Additional Sections ***** */}
      <section>
        <div>
          <SecondPage></SecondPage>
        </div>
      </section>
      <section>
        <div className="relative z-10 pt-20">
          <ThirdPage></ThirdPage>
        </div>
      </section>
      <section>
        <div >
          <FourthPage></FourthPage>
        </div>
      </section>
    </div>
  );
}
