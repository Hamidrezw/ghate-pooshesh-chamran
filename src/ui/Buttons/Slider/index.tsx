import Arrow from "@/components/Svgs/Arrow";

const SliderButton = ({
  position,
  className,
}: {
  position: "left" | "right";
  className: string;
}) => {
  return (
    <div
      className={`${className} w-7 h-7 lg:w-10 lg:h-10 flex items-center justify-center cursor-pointer select-none border-[1.5px] border-primary-dark hover:border-primary text-primary-dark hover:text-background bg-background-subtle hover:bg-primary transition-all duration-300 rounded-[150px] shadow-[1px_1px_4px_rgba(0,0,0,0.2)]`}
    >
      {position === "right" ? (
        <Arrow size="big" color="currentColor" position="right" />
      ) : (
        <Arrow size="big" color="currentColor" position="left" />
      )}
    </div>
  );
};

export default SliderButton;
