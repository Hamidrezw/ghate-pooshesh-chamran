"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FooterDeveloperText = () => {
  const [text, setText] = useState<string>("");
  const [showImage, setShowImage] = useState<boolean>(false);
  const containerRef = useRef(null);
  const targetText = "طراحی و توسعه توسط تیم روبیسا";
  const typingSpeed = 70;
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasAnimated.current === false) {
          hasAnimated.current = true;
          const currentIndex = targetText.length - 1;
          let counter = 0;
          let auxiliaryVariable = "";
          const typingInterval = setInterval(() => {
            if (currentIndex >= 0 && counter <= targetText.length - 1) {
              auxiliaryVariable += targetText[counter];
              setText(auxiliaryVariable);
              counter++;
            } else {
              clearInterval(typingInterval);
              setShowImage(true);
            }
          }, typingSpeed);

          return () => clearInterval(typingInterval);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <Link href={"https://rubysa.ir/"} target="_blank">
      <div
        ref={containerRef}
        className="w-full h-[54px] bg-darkb-accent text-h4 flex justify-center items-center gap-1"
        style={{ direction: "rtl" }}
      >
        <div className="flex items-center">
          <span className=" text-background relative pr-2">
            {text}
          </span>
        </div>
        {showImage && (
          <div className="rounded-[16px] flex items-center animate-bounce">
            <Image
              alt="Rubysa Logo"
              src="/images/rubysa-logo.png"
              width={30}
              height={30}
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default FooterDeveloperText;
