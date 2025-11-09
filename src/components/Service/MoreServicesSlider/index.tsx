"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SliderButton from "@/ui/Buttons/Slider";
import CategoryCard from "@/components/Home/ServiceList/CategoryCard";
import TitleLine from "@/components/Layout/TitleLine";
import { TService } from "@/models/Service";

const MoreServiceSlider = ({ data }: { data: TService[] }) => {
  return (
    <>
      <TitleLine
        data={{
          title: "سایر خدمات ما",
          size: "small",
          slug: "/service",
          moreText: "مشاهده همه",
        }}
      />
      <div className="relative mt-2 lg:mt-4.5">
        <Swiper
          slidesPerView={2.3}
          spaceBetween={16}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          navigation={{
            nextEl: ".slider_next_button_services",
            prevEl: ".slider_prev_button_services",
            disabledClass: "slider_disable_button",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4.3,
            },
          }}
        >
          {data?.map((data, i) => (
            <SwiperSlide key={i}>
              <CategoryCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-20 mt-[-10px] lg:mt-[-16px] top-[50%] left-[-10px] lg:left-[-16px] cursor-pointer">
          <SliderButton
            position="left"
            className="slider_next_button_services"
          />
        </div>
        <div className="absolute z-20 mt-[-10px] lg:mt-[-16px] top-[50%] right-[-10px] lg:right-[-16px] cursor-pointer">
          <SliderButton
            position="right"
            className="slider_prev_button_services"
          />
        </div>
      </div>
    </>
  );
};

export default MoreServiceSlider;
