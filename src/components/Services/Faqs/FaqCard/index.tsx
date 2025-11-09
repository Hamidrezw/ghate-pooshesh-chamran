"use client";
import { TFaq } from "@/models/Faq";
import { useState, useRef, useEffect } from "react";

const FaqCard = ({ data }: { data: TFaq }) => {
  const [check, setCheck] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (check && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [check]);

  return (
    <div
      className={`px-5 lg:px-10 py-4 lg:py-8 rounded-[10px] lg:rounded-[25px] cursor-pointer ${
        check ? "bg-primary-light" : "bg-primary"
      } select-none transition-all duration-400`}
      onClick={() => setCheck(!check)}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <h3
            className={`text-h3 transition-colors duration-400 text-${
              check ? "primary-dark" : "background"
            }`}
          >
            {data.question}
          </h3>
          <div
            ref={contentRef}
            style={{ height }}
            className="overflow-hidden transition-all duration-250 ease-in-out"
          >
            <h4 className="mt-4 lg:mt-6 text-h4">{data.answer}</h4>
          </div>
        </div>
        <div className="transition-transform duration-400">
          {!check ? (
            <svg
              className="w-6 h-6 lg:w-8 lg:h-8"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18.9605V11.8213H11.7164V0.20105H18.6567V11.8213H30V18.9605H18.6567V30.201H11.7164V18.9605H0Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-2 lg:w-8 lg:h-3"
              viewBox="0 0 30 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.27791V0.138672H11.7164L18.6567 0.138807L30 0.138672V7.27791H18.6567H11.7164H0Z"
                fill="#B90022"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;