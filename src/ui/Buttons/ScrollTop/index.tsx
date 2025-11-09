"use client";
import { useScrollToTop } from "@/hooks/useScrollTop";
const ScrollTopButton = () => {
  const scrollToTop = useScrollToTop();
  return (
    <button
      onClick={scrollToTop}
      className="w-12 h-12 lg:w-[60px] lg:h-[60px] flex items-center justify-center cursor-pointer rounded-[12px] text-text-secondary hover:text-background bg-background-subtle hover:bg-primary-dark border-text-secondary border-[0.2px] shadow-[0.82px_0.82px_2.45px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      <svg
        className="hidden lg:block"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9572 29.6299C13.9572 30.7581 14.8718 31.6727 16 31.6727C17.1282 31.6727 18.0428 30.7581 18.0428 29.6299L16 29.6299L13.9572 29.6299ZM17.4445 0.925775C16.6468 0.128012 15.3533 0.12801 14.5556 0.925772L1.55523 13.9261C0.757467 14.7238 0.757465 16.0173 1.55523 16.815C2.35299 17.6128 3.64642 17.6128 4.44419 16.815L16 5.25921L27.5558 16.8151C28.3536 17.6128 29.647 17.6128 30.4448 16.8151C31.2426 16.0173 31.2426 14.7239 30.4448 13.9261L17.4445 0.925775ZM16 29.6299L18.0428 29.6299L18.0428 2.37025L16 2.37025L13.9572 2.37025L13.9572 29.6299L16 29.6299Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="block lg:hidden"
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4002 23.4419C10.4002 24.3445 11.1319 25.0761 12.0344 25.0761C12.937 25.0761 13.6687 24.3445 13.6687 23.4419L12.0344 23.4419L10.4002 23.4419ZM13.19 0.478606C12.5518 -0.159606 11.5171 -0.159607 10.8789 0.478603L0.478609 10.8788C-0.159603 11.517 -0.159604 12.5518 0.478606 13.19C1.11682 13.8282 2.15156 13.8282 2.78977 13.19L12.0344 3.94535L21.2791 13.19C21.9173 13.8282 22.9521 13.8282 23.5903 13.19C24.2285 12.5518 24.2285 11.5171 23.5903 10.8789L13.19 0.478606ZM12.0344 23.4419L13.6687 23.4419L13.6687 1.63419L12.0345 1.63419L10.4002 1.63419L10.4002 23.4419L12.0344 23.4419Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
