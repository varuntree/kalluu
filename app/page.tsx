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
    // Animate the bubble: grow from scale 0 to large and then shrink back
    gsap.fromTo(
      bubbleRef.current,
      { scale: 0.5 },
      {
        scale: 2,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <div className="relative px-6 lg:px-20">
      {/* Animated Bubble Background */}
      <div
        ref={bubbleRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full bg-blue-800 
                   blur-3xl opacity-50 z-0 origin-center"
        style={{ transform: "translate(-50%, -50%)" }}
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
