"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import Footer from "./components/Footer";

export default function Home() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    // Initial animation from right to left
    gsap.set(bubbleRef.current, { 
      scaleX: 1,
      xPercent: 100 
    });
    
    // Animate from right to left on load
    gsap.to(bubbleRef.current, {
      xPercent: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        // Start the regular animation after initial load
        gsap.fromTo(
          bubbleRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative px-6 lg:px-20">
      {/* Animated Bubble Background */}
      <div
        ref={bubbleRef}
        className="fixed top-0 left-0 w-screen h-screen bg-blue-800/30 
                   blur-3xl opacity-90 z-0 origin-center"
      ></div>

      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <header className="relative z-10 pt-6">
        <MainPage />
      </header>
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
        <div>
          <FourthPage></FourthPage>
        </div>
      </section>
      <footer>
        <div>
          <Footer></Footer>
        </div>
      </footer>
    </div>
  );
}
