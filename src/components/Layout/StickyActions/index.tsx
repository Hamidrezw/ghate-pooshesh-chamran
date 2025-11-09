"use client";
import ScrollTopButton from "@/ui/Buttons/ScrollTop";
import TelephoneButton from "@/ui/Buttons/Telephone";
import WhatsAppButton from "@/ui/Buttons/Whatsapp";
import { useEffect, useState } from "react";

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="select-none">
        <div className="fixed bottom-6 right-4 lg:right-10 z-[410]">
          <ScrollTopButton />
        </div>
        <div className="fixed bottom-6 left-4 lg:left-10 z-[410]">
          <div className="flex flex-col items-center gap-4 lg:gap-9">
            <TelephoneButton />
            <WhatsAppButton />
          </div>
        </div>
      </div>
    )
  );
};

export default StickyActions;
