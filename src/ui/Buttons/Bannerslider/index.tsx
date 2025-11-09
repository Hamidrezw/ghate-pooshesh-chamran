import Arrow from "@/components/Svgs/Arrow";
import BannerMarker from "@/components/Svgs/BannerMarker";

const BannerSliderButton = ({
  position,
  className,
}: {
  position: "left" | "right";
  className: string;
}) => {
  return (
    <div className={`${className} relative hover:cursor-pointer select-none`}>
      <BannerMarker position={position} />
      <div className={`absolute top-[35px] lg:top-[62px] right-[35%] lg:right-[40%]`}>
        {position === "left" ? (
          <Arrow position={position} size="big" color="text-primary" />
        ) : (
          <Arrow position={position} size="big" color="text01" />
        )}
      </div>
    </div>
  );
};

export default BannerSliderButton;
