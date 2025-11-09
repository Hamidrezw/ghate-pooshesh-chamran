const Arrow = () => {
  return (
    <svg
       className="w-[9px] h-[15px] lg:w-[20px] lg:h-[34px]"
      width="20"
      height="34"
      viewBox="0 0 20 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.11523 3.23002L16.8852 17L3.11523 30.77"
        stroke="currentColor"
        strokeWidth="5.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const GallerySliderButton = ({
  position,
  className,
}: {
  position: "left" | "right";
  className: string;
}) => {
  return (
    <div
      className={`${className} w-8.5 lg:w-25 h-8.5 lg:h-25 flex items-center justify-center cursor-pointer select-none border-[1.5px] border-primary-dark hover:border-primary text-primary-dark hover:text-background bg-background-subtle hover:bg-primary transition-all duration-300 rounded-[150px] shadow-[1px_1px_4px_rgba(0,0,0,0.2)]`}
    >
      {position === "right" ? (
        <Arrow />
      ) : (
        <div className="rotate-180">
          <Arrow />
        </div>
      )}
    </div>
  );
};

export default GallerySliderButton;
