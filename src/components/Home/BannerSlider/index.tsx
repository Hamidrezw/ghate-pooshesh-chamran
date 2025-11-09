"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import BannerSliderButton from "@/ui/Buttons/Bannerslider";
import { TBanner } from "@/models/Banner";

const BannerSlider = ({ data }: { data: TBanner[] }) => {
  return (
    <div className="relative w-screen lg:w-full -mx-4 lg:mx-0 lg:rounded-[25px] overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        loop={true}
        speed={650}
        touchRatio={0.8}
        navigation={{
          nextEl: ".slider_next_button_banner",
          prevEl: ".slider_prev_button_banner",
        }}
        pagination={{
          el: "#containerForBannerBullets",
          type: "bullets",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          clickable: true,
        }}
      >
        {data?.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="w-full h-[120px] sm:h-[180px] md:h-[270px] lg:h-[370px] relative">
              <Image
                src={process.env.NEXT_PUBLIC_SERVER_URL + data?.image}
                alt={data.title}
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {data?.length > 1 && (
        <>
          <div className="absolute bottom-[50px] lg:bottom-[115px] right-[-1px] z-10">
            <BannerSliderButton
              position="right"
              className="slider_prev_button_banner"
            />
          </div>
          <div className="absolute bottom-[50px] lg:bottom-[115px] left-0 z-10">
            <BannerSliderButton
              position="left"
              className="slider_next_button_banner"
            />
          </div>
          <div id="containerForBannerBullets"></div>
        </>
      )}
    </div>
  );
};

export default BannerSlider;
