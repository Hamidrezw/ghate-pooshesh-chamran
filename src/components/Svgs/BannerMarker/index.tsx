const BannerMarker = ({ position }: { position: "left" | "right" }) => {
    return (
      <div className={`${position === "left" ? "" : "rotate-180"}`}>
        <svg
          className="block lg:hidden"
          width="20"
          height="78"
          viewBox="0 0 20 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.66965 0.278614L-0.483293 0.278614C-0.483296 17.1875 20 22.8237 20 38.8427C20 54.8616 -0.483303 57.828 -0.483307 78L-1.66967 78L-1.66965 0.278614Z"
            fill="white"
          />
        </svg>
        <svg
          className="hidden lg:block"
          width="35"
          height="131"
          viewBox="0 0 35 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-1.99996 131L-0.000335677 131C-0.00034066 102.5 34.5244 93 34.5244 66C34.5244 39 -0.000352637 34 -0.000358582 6.0365e-06L-1.99998 6.38613e-06L-1.99996 131Z"
            fill="white"
          />
        </svg>
      </div>
    );
  };
  
  export default BannerMarker;
  