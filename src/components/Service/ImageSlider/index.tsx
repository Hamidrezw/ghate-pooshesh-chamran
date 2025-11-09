"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderButton from "@/ui/Buttons/Slider";
import Image from "next/image";

const CategorySlider = ({
  data,
}: {
  data: { id: number; image: string }[];
}) => {
  return (
    <div className="w-full relative rounded-[25px] cursor-pointer">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        speed={650}
        touchRatio={0.8}
        navigation={{
          nextEl: ".slider_next_button_service_detail",
          prevEl: ".slider_prev_button_service_detail",
          disabledClass: "slider_disable_button",
        }}
        pagination={{
          el: "#containerForBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
      >
        {data?.map((data, i) => (
          <SwiperSlide key={i}>
            <div className="w-full relative h-50 lg:h-100">
              <Image
                src={
                  data?.image && data?.image != "None"
                    ? process.env.NEXT_PUBLIC_SERVER_URL + data?.image
                    : "/images/no-image.png"
                }
                alt={data?.image}
                className="rounded-[10px] lg:rounded-[25px]"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 lg:bottom-6 left-14 lg:left-22 z-10">
        <SliderButton
          position="right"
          className="slider_prev_button_service_detail"
        />
      </div>
      <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-8 z-10">
        <SliderButton
          position="left"
          className="slider_next_button_service_detail"
        />
      </div>
      <div id="containerForBullets"></div>
    </div>
  );
};

export default CategorySlider;
