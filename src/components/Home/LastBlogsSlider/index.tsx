"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import BlogCard from "@/components/Home/LastBlogsSlider/Card";
import TitleLine from "@/components/Layout/TitleLine";
import SliderButton from "@/ui/Buttons/Slider";
import { TBlog } from "@/models/Blog";

const LastBlogsSlider = ({ data }: { data: TBlog[] }) => {
  return (
    <>
      <TitleLine
        data={{
          title: "آخرین مطالب وبلاگ",
          moreText: "مشاهده همه مطالب",
          slug: "blog",
          size: "small",
        }}
      />
      <div className="relative mt-4 lg:mt-5">
        <Swiper
          slidesPerView={1.6}
          spaceBetween={16}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
          }}
          navigation={{
            nextEl: ".slider_next_button_lastBlogs",
            prevEl: ".slider_prev_button_lastBlogs",
            disabledClass: "slider_disable_button",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((data, i) => (
            <SwiperSlide key={i}>
              <BlogCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-20 mt-[-5px] lg:mt-[-16px] top-[50%] right-[-14px] lg:right-[-16px] cursor-pointer">
          <SliderButton
            position="right"
            className="slider_prev_button_lastBlogs"
          />
        </div>
        <div className="absolute z-20 mt-[-5px] lg:mt-[-16px] top-[50%] left-[-14px] lg:left-[-16px] cursor-pointer">
          <SliderButton
            position="left"
            className="slider_next_button_lastBlogs"
          />
        </div>
      </div>
    </>
  );
};

export default LastBlogsSlider;
