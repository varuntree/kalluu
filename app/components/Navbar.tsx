
"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({
    opacity: 0,
    width: 0,
    transform: "translateX(0px)",
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLAnchorElement[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = href.substring(1);
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${target}`,
      ease: "power2.inOut"
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const { offsetLeft, offsetWidth } = target;
    setHighlightStyle({
      opacity: 1,
      width: `${offsetWidth}px`,
      transform: `translateX(${offsetLeft}px)`,
    });
  };

  const handleMouseLeave = () => {
    setHighlightStyle({
      opacity: 0,
      width: 0,
      transform: "translateX(0px)",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      navbarRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 1, ease: "power4.out" }
    ).from(
      itemsRef.current,
      {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto 
                   bg-white/10 backdrop-blur-xl border border-white/20 
                   rounded-b-xl shadow-lg"
        ref={navbarRef}
      >
        <div 
          className="text-2xl font-bold text-gray-900 cursor-pointer" 
          onClick={(e) => handleClick(e, '#home')}
        >
          KLU
        </div>

        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="block w-6 h-0.5 bg-gray-900"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
          <span className="block w-6 h-0.5 bg-gray-900"></span>
        </button>

        <div
          className="relative text-gray-900 font-medium hidden md:flex md:justify-between"
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="absolute bottom-0 h-full p-4 rounded 
                     bg-secondary/10 backdrop-blur-xl border border-white/20 
                     transition-all duration-300 ease-out"
            style={highlightStyle}
          ></div>

          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative p-2 mx-2 z-10 pb-1 transition-colors duration-200 hover:text-blue-700"
              onMouseEnter={handleMouseEnter}
              onClick={(e) => handleClick(e, item.href)}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="tel:+61426600521"
            className="px-4 py-2 rounded-lg 
                       bg-white/10 backdrop-blur-sm border border-white/20
                       text-gray-900 
                       hover:bg-white/20
                       transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-b-xl shadow-lg md:hidden">
          <div className="flex flex-col space-y-2 p-4 text-gray-900 font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 transition-colors duration-200 hover:text-blue-700"
                onClick={(e) => {
                  handleClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:+61426600521"
              className="px-4 py-2 rounded-lg 
                         bg-white/10 backdrop-blur-sm border border-white/20
                         text-gray-900 
                         hover:bg-white/20
                         hover:text-blue-700
                         transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
