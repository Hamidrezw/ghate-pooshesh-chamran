const Arrow = ({
  color,
  position,
  size,
}: {
  color: string;
  position: "left" | "right" | "up" | "down";
  size: "big" | "small";
}) => {
  const rotationClass = {
    left: "",
    right: "rotate-180",
    up: "rotate-90",
    down: "-rotate-90",
  }[position];

  return (
    <div className={`text-${color} ${rotationClass}`}>
      {size === "small" ? (
        <svg
          width="5"
          height="9"
          viewBox="0 0 5 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7.5L1 4.5L4 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 1L1 5L5 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Arrow;
