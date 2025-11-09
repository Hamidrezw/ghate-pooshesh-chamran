"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import GallerySliderButton from "@/ui/Buttons/GallerySlider";
import { TGallery } from "@/models/Gallery";

interface GallerySliderProps {
  setIsOpen: (value: boolean) => void;
  selectedIndex: number;
  data: TGallery[];
}

const GallerySlider = ({
  setIsOpen,
  selectedIndex,
  data,
}: GallerySliderProps) => {
  return (
    <>
      <div className="fixed inset-0 bg-[#000000cc] bg-opacity-70 z-[500]" />
      <div
        className="fixed inset-0 flex items-center justify-center z-[510] select-none cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <div className="relative w-full" onClick={(e) => e.stopPropagation()}>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={180}
            speed={700}
            effect="coverflow"
            initialSlide={selectedIndex}
            breakpoints={{
              1024: {
                slidesPerView: 1.5,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{
              el: "#containerForGalleryBullets",
              type: "bullets",
              clickable: true,
              bulletClass: "swiper-custom-gallery-bullet",
              bulletActiveClass: "swiper-custom-gallery-bullet-active",
            }}
            navigation={{
              nextEl: ".slider_next_button_gallery",
              prevEl: ".slider_prev_button_gallery",
              disabledClass: "slider_disable_button",
            }}
            className="h-full"
          >
            {data.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="relative h-[210px] lg:h-[470px]">
                  {data.media_type === "picture" ? (
                    <Image
                      src={process.env.NEXT_PUBLIC_SERVER_URL + data?.file}
                      alt={data.title || ""}
                      fill
                      className="lg:rounded-[15px]"
                    />
                  ) : (
                    <video controls className="w-full h-full lg:rounded-[15px]">
                      <source
                        src={process.env.NEXT_PUBLIC_SERVER_URL + data?.file}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="containerForGalleryBullets"
            className="mt-5 lg:mt-10 w-full flex items-center justify-center gap-2"
          />
          <div className="absolute top-[40%] lg:top-[40%] left-5 lg:left-20 z-10">
            <GallerySliderButton
              position="left"
              className="slider_next_button_gallery"
            />
          </div>
          <div className="absolute top-[40%] lg:top-[40%] right-5 lg:right-20 z-10">
            <GallerySliderButton
              position="right"
              className="slider_prev_button_gallery"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
