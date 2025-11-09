"use client";
import { useEffect, useState } from "react";
import MainHeader from "./Main";
import TopHeader from "./TopHeader";

const Header = () => {
  const [showTop, setShowTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 150) {
        setShowTop(true); 
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[420] w-full bg-background shadow-[0px_1px_2px_rgba(0,0,0,0.15)] transition-all duration-300">
      <div
        className={`bg-text-primary h-10 overflow-hidden transition-all duration-300 ${
          showTop ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 lg:container mx-auto h-full">
          <TopHeader />
        </div>
      </div>
      <div className="h-[60px] lg:h-28.5">
        <div className="px-4 lg:container mx-auto h-full">
          <MainHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
