const RoutingButton = () => {
  return (
    <div className="w-[150px] h-10 flex items-center justify-center rounded-[100px] bg-background cursor-pointer">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.57006 5.1C3.37006 1.64 8.58006 1.64 9.37006 5.1C9.84006 7.13 8.55006 8.85 7.43006 9.92C6.61006 10.7 5.32006 10.69 4.50006 9.92C3.39006 8.85 2.10006 7.13 2.57006 5.1Z"
          stroke="#141D26"
          strokeWidth="1.5"
        />
        <path
          d="M15.57 17.1C16.37 13.64 21.61 13.64 22.41 17.1C22.88 19.13 21.59 20.85 20.46 21.92C19.64 22.7 18.34 22.69 17.52 21.92C16.39 20.85 15.1 19.13 15.57 17.1Z"
          stroke="#141D26"
          strokeWidth="1.5"
        />
        <path
          d="M12.4997 5.5H15.1797C17.0297 5.5 17.8897 7.79 16.4997 9.01L8.5097 16C7.1197 17.21 7.9797 19.5 9.8197 19.5H12.4997"
          stroke="#141D26"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.98573 6H5.99728"
          stroke="#141D26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9857 18H18.9973"
          stroke="#141D26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="text-button   mr-2.5">مسیریابی</span>
    </div>
  );
};

export default RoutingButton;
