const MessageSvg = ({color} : {color : string}) => {
  return (
    <svg
        className={`text-${color}`}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66683 12.7867H7.3335L10.3002 14.76C10.7402 15.0533 11.3335 14.74 11.3335 14.2067V12.7867C13.3335 12.7867 14.6668 11.4533 14.6668 9.45333V5.45333C14.6668 3.45333 13.3335 2.12 11.3335 2.12H4.66683C2.66683 2.12 1.3335 3.45333 1.3335 5.45333V9.45333C1.3335 11.4533 2.66683 12.7867 4.66683 12.7867Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageSvg