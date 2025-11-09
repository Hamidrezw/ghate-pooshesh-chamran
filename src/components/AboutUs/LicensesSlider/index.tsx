"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderButton from "@/ui/Buttons/Slider";
import TitleLine from "@/components/Layout/TitleLine";
import Image from "next/image";
import GallerySvg from "@/components/Svgs/Gallery";
import { TLicense } from "@/models/License";

interface LicensesSliderProps {
  licenseList: TLicense[];
}

const LicensesSlider = ({ licenseList }: LicensesSliderProps) => {
  return (
    <>
      <TitleLine data={{ title: "مجوز ها", size: "big" }} />
      <div className="relative mt-1.5">
        <Swiper
          slidesPerView={2.3}
          spaceBetween={8}
          modules={[Navigation]}
          dir="ltr"
          navigation={{
            nextEl: ".slider_next_button_license",
            prevEl: ".slider_prev_button_license",
            disabledClass: "slider_disable_button",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4.3,
            },
          }}
        >
          {licenseList?.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="border-primary-light border-[1px] rounded-[8px] lg:rounded-[15px] cursor-pointer">
                <div className="relative h-[190px] lg:h-[350px] w-full border-primary-dark border-3 lg:border-6 rounded-[8px] lg:rounded-[15px] overflow-hidden">
                  <Image
                    src={
                      data?.image && data?.image != "None"
                        ? process.env.NEXT_PUBLIC_SERVER_URL + data?.image
                        : "/images/no-image.png"
                    }
                    className="rounded-[15px]"
                    alt={data.title || ""}
                    fill
                  />
                  <div className="absolute inset-0 bg-text-secondary/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <GallerySvg />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-20 mt-[-10px] lg:mt-[-16px] top-[50%] right-[-13px] lg:right-[-20px] cursor-pointer">
          <SliderButton
            position="right"
            className="slider_next_button_license"
          />
        </div>
        <div className="absolute z-20 mt-[-10px] lg:mt-[-16px] top-[50%] left-[-13px] lg:left-[-20px] cursor-pointer">
          <SliderButton
            position="left"
            className="slider_prev_button_license"
          />
        </div>
      </div>
    </>
  );
};

export default LicensesSlider;
